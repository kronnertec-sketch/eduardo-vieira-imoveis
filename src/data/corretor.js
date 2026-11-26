/**
 * Dados centralizados do corretor Eduardo Vieira.
 * Campos marcados com "a confirmar" podem ser atualizados aqui facilmente.
 */
export const CORRETOR = {
  // IDENTIDADE
  nome: 'Eduardo Vieira',
  marca: 'Eduardo Vieira, Corretor de Imóveis',
  profissao: 'Corretor de imóveis',
  /** Substitua quando confirmar o número do CRECI (ex: 'CRECI-GO 12345') */
  creci: 'a confirmar',
  cidade: 'Goiânia - GO',
  bairroBase: 'Setor Marista',

  // LOGO (troque o caminho em /public/images/ quando desejar atualizar)
  logoUrl: '/images/logo-ev.svg',

  // CONTATO
  telefone: '(62) 99828-4849',
  telefoneHref: 'tel:+5562998284849',
  whatsappNumero: '5562998284849',
  whatsappUrl: 'https://wa.me/5562998284849',
  instagramHandle: '@eduardovs.imoveis',
  instagramUrl: 'https://www.instagram.com/eduardovs.imoveis/',
  /** Substitua quando confirmar o e-mail oficial */
  email: 'a confirmar',
  endereco: 'R. 139, 349, Setor Marista, Goiânia - GO, CEP 74170-150',
  horario: 'Todos os dias, 8h às 19h',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+139,+349,+Setor+Marista,+Goi%C3%A2nia+-+GO,+74170-150',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=R.%20139,%20349,%20Setor%20Marista,%20Goi%C3%A2nia%20-%20GO,%2074170-150&t=&z=16&ie=UTF8&iwloc=&output=embed',

  // REPUTAÇÃO NO GOOGLE
  google: {
    nota: '5,0',
    totalAvaliacoes: 43,
  },

  // TEXTO SOBRE (edite livremente após aprovação do corretor)
  sobre: {
    titulo: 'Atendimento próximo, transparente e sem pressa',
    paragrafos: [
      'Com base no Setor Marista, atuo em Goiânia ajudando clientes a comprar e vender imóveis com segurança e clareza em cada etapa.',
      'Cada busca é feita de forma personalizada: escuto o que você precisa, seleciono as melhores opções e acompanho toda a negociação do início ao fim.',
    ],
  },

  // FOTOS (troque os caminhos se quiser atualizar retrato ou referências)
  imagens: {
    heroRetrato: '/images/eduardo-hero.jpg',
    heroFundo: '/images/casa-arquitetura-1.png',
    sobreRetrato: '/images/eduardo-sobre.jpg',
    ctaFundo: '/images/casa-arquitetura-2.jpg',
  },

  // SERVIÇOS
  servicos: [
    {
      id: 'compra-venda',
      titulo: 'Compra e venda de imóveis',
      descricao:
        'Condução segura e transparente para quem deseja comprar ou vender imóveis em Goiânia com tranquilidade.',
      imagem: '/images/casa-arquitetura-2.jpg',
      imagemAlt: 'Residência contemporânea com fachada moderna em concreto e madeira',
      whatsappTexto:
        'Olá, Eduardo! Gostaria de conversar sobre compra ou venda de imóvel em Goiânia.',
      icone: 'home',
    },
    {
      id: 'busca-personalizada',
      titulo: 'Busca personalizada',
      descricao:
        'Pesquisa dedicada para encontrar a melhor opção de acordo com o seu perfil, objetivo e momento.',
      imagem: '/images/casa-arquitetura-1.png',
      imagemAlt: 'Casa moderna ao entardecer com iluminação arquitetônica e fachada em vidro',
      whatsappTexto:
        'Olá, Eduardo! Gostaria de iniciar uma busca personalizada de imóvel em Goiânia.',
      icone: 'search',
    },
    {
      id: 'suporte-completo',
      titulo: 'Suporte do início ao fim',
      descricao:
        'Acompanhamento próximo, paciência e clareza em todas as etapas, do primeiro contato ao fechamento.',
      imagem: '/images/casa-arquitetura-3.jpg',
      imagemAlt: 'Fachada contemporânea iluminada ao entardecer com jardim frontal',
      whatsappTexto:
        'Olá, Eduardo! Gostaria de tirar dúvidas e receber suporte para minha negociação.',
      icone: 'shield',
    },
  ],

  // DIFERENCIAIS
  diferenciais: [
    {
      titulo: 'Todos os dias, das 8h às 19h',
      descricao: 'Disponibilidade ao longo de toda a semana para atender no melhor horário para você.',
    },
    {
      titulo: 'Transparência, honestidade e paciência',
      descricao: 'Pontos destacados de forma recorrente por quem já foi atendido.',
    },
    {
      titulo: 'Nota 5,0 com 43 avaliações no Google',
      descricao: 'Reputação construída no atendimento real, cliente por cliente.',
    },
  ],

  // DEPOIMENTOS REAIS DO GOOGLE (exibir como "Cliente Google", sem nomes)
  depoimentos: [
    {
      id: 1,
      texto:
        'Atencioso e educado, Eduardo oferece um atendimento personalizado que preza pela qualidade e pelo cliente, além de ser muito transparente e disposto em ajudar cada um. Indico muito!',
      autor: 'Cliente Google',
    },
    {
      id: 2,
      texto:
        'Sempre atencioso, busca as melhores opções para seus clientes e trabalha com muita honestidade e comprometimento.',
      autor: 'Cliente Google',
    },
    {
      id: 3,
      texto:
        'Tive uma experiência muito positiva. Muito atencioso, paciente e dedicado em encontrar a melhor opção para mim. Demonstrou muito conhecimento e profissionalismo. Recomendo com certeza!',
      autor: 'Cliente Google',
    },
    {
      id: 4,
      texto:
        'Ótimo atendimento, bastante atencioso e educado, deu todo o suporte do início ao fim, recomendo bastante!!!',
      autor: 'Cliente Google',
    },
  ],

  // PERGUNTAS FREQUENTES (apenas fatos confirmados)
  faq: [
    {
      pergunta: 'Onde fica a base de atendimento do corretor Eduardo Vieira em Goiânia?',
      resposta:
        'A base de atendimento fica na R. 139, 349, Setor Marista, Goiânia - GO, CEP 74170-150, com atuação para compra e venda de imóveis em Goiânia.',
    },
    {
      pergunta: 'Qual é o horário de atendimento de Eduardo Vieira?',
      resposta:
        'O atendimento acontece todos os dias da semana, das 8h às 19h, pelo WhatsApp (62) 99828-4849 ou telefone.',
    },
    {
      pergunta: 'Como funciona o atendimento para comprar ou vender um imóvel?',
      resposta:
        'Eduardo realiza a busca personalizada da melhor opção para cada cliente e oferece suporte completo do início ao fim da negociação.',
    },
    {
      pergunta: 'Qual é a avaliação de Eduardo Vieira no Google?',
      resposta:
        'Eduardo Vieira possui nota 5,0 de 5 com 43 avaliações no Google Maps, nas quais clientes destacam transparência, honestidade, paciência e dedicação.',
    },
  ],
};

export function montarLinkWhatsApp(mensagem) {
  const texto =
    mensagem ||
    'Olá, Eduardo! Encontrei seu site e gostaria de conversar sobre um imóvel em Goiânia.';
  return `${CORRETOR.whatsappUrl}?text=${encodeURIComponent(texto)}`;
}
