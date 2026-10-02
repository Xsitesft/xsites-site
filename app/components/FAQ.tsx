'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quanto tempo demora para ficar pronto?',
      answer: 'O prazo é combinado de acordo com o tipo de site e começa depois de recebermos todos os textos, imagens e informações necessários.',
      details: ''
    },
    {
      question: 'O que está incluído no preço?',
      answer: 'O preço inclui os itens indicados no pacote escolhido. Os textos, imagens, logótipo, preços e contactos devem ser fornecidos pelo cliente. Novas páginas ou funcionalidades podem ter custo adicional.',
      details: ''
    },
    {
      question: 'Vocês cuidam do domínio e hospedagem?',
      answer: 'Podemos orientar ou tratar do domínio e da hospedagem como serviços opcionais. Os custos dependem do fornecedor e não estão incluídos automaticamente no preço de criação.',
      details: ''
    },
    {
      question: 'E se eu quiser mudar algo depois?',
      answer: 'Cada pacote inclui um número definido de rondas de pequenas correções. Novas páginas, funcionalidades ou alterações fora do escopo podem ser orçamentadas separadamente.',
      details: ''
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'O valor da criação é único. Pode ser pago em duas parcelas: 50% no início e 50% antes da publicação do site.',
      details: ''
    },
    {
      question: 'Atendem fora de Luanda?',
      answer: 'Sim. Atendemos clientes de qualquer província de Angola à distância, através de WhatsApp e outros meios combinados.',
      details: ''
    },
    {
      question: 'Vocês oferecem suporte técnico?',
      answer: 'Sim. Após a entrega, oferecemos orientação inicial gratuita. A manutenção contínua, alterações e suporte técnico recorrente são serviços opcionais, com condições e valores definidos separadamente.',
      details: ''
    }
  ];

  return (
    <section id="faq" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-8">Perguntas frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left mb-2"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-semibold text-text">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gold transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
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
                <p className="text-text-muted">{faq.answer}</p>
                {faq.details && (
                  <div className="mt-2 text-sm text-text-muted">
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