'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      setStatus('error');
      setErrorMessage('Configuração do Supabase em falta. Contacte via WhatsApp ou e-mail.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

    if (error) {
      console.error('Supabase error:', error);
      setStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Tente novamente ou contacte via WhatsApp/e-mail.');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contacto" className="py-16 bg-bg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        {status === 'success' && (
          <div className="mb-6 p-4 bg-success/10 border border-success/30 text-success rounded-lg" role="alert">
            Mensagem enviada com sucesso! Entraremos em contacto em breve.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
              className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
              className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              disabled={status === 'submitting'}
              className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-primary text-white py-2 px-4 rounded hover:opacity-90 transition flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'A enviar...' : 'Enviar'}
            </button>
            <a
              href="https://wa.me/244926311857"
              className="flex-1 bg-bg text-primary text-white py-2 px-4 rounded hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="21" r="4"></circle>
                <line x1="17" y1="11" x2="3" y2="11"></line>
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="mailto:xsites.ao@gmail.com"
              className="flex-1 bg-bg text-primary text-white py-2 px-4 rounded hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Enviar e-mail
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}