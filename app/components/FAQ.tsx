'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quanto tempo demora para ficar pronto?',
      answer: 'Até 10 dias úteis.',
      details: 'Orçamentos mais complexos podem estender esse prazo, mas nos comprometemos a entregar dentro do combinado.'
    },
    {
      question: 'O que está incluído no preço?',
      answer: 'Domínio, hospedagem, design, desenvolvimento e 1–2 revisões.',
      details: ''
    },
    {
      question: 'Vocês cuidam do domínio e hospedagem?',
      answer: 'Sim, incluímos no primeiro ano, conforme o pacote contratado.',
      details: ''
    },
    {
      question: 'E se eu quiser mudar algo depois?',
      answer: '30 dias de suporte para ajustes.',
      details: 'Após esse período, ajustes podem ser realizados mediante orçamento.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: '50% no início e 50% na entrega.',
      details: ''
    },
    {
      question: 'Atendem fora de Luanda?',
      answer: 'Sim, atendemos todo o país.',
      details: ''
    }
  ];

  return (
    <section id="faq" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-8">Perguntas frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-border/50">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left mb-2"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-semibold text-text">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
                <p className="text-text/70">{faq.answer}</p>
                {faq.details && (
                  <div className="mt-2 text-sm text-text/60">
                    <p>{faq.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}