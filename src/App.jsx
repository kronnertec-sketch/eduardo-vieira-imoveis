import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  X,
} from 'lucide-react';
import { CORRETOR, montarLinkWhatsApp } from './data/corretor';

const NAV_ITEMS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Região', href: '#regiao' },
  { label: 'Dúvidas', href: '#perguntas' },
  { label: 'Contato', href: '#contato' },
];

const COOKIE_STORAGE_KEY = 'ev_imoveis_cookie_notice_v1';

function FiveStars({ size = 15 }) {
  return (
    <span className="stars-row" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          size={size}
          fill="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    try {
      return window.localStorage.getItem(COOKIE_STORAGE_KEY) !== 'accepted';
    } catch {
      return true;
    }
  });

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, 'accepted');
    } catch {
      // ignore storage errors in restricted contexts
    }
    setShowCookieBanner(false);
  };

  useEffect(() => {
    if (!privacyOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setPrivacyOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [privacyOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.setAttribute('data-visible', 'true'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const whatsappGeral = montarLinkWhatsApp();
  const [servicoDestaque, ...servicosSecundarios] = CORRETOR.servicos;

  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo principal
      </a>

      {/* Header */}
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#topo" className="brand-link" aria-label={CORRETOR.marca}>
            <img src={CORRETOR.logoUrl} alt={CORRETOR.marca} className="brand-logo-img" />
            <span className="brand-text">
              <span className="brand-name">{CORRETOR.nome}</span>
              <span className="brand-role">{CORRETOR.profissao}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        <span
          className="scroll-progress"
          aria-hidden="true"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Menu mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappGeral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={17} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </nav>
      )}

      <main id="conteudo-principal">
        {/* Editorial Hero on Architectural Limestone Stage */}
        <section id="topo" className="hero">
          <div className="hero-grid-lines" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title hero-enter">
                {CORRETOR.nome}, <em>corretor de imóveis</em> em Goiânia
              </h1>

              <p className="hero-subtitle hero-enter hero-enter-delay-1">
                Compra e venda de imóveis com busca personalizada, transparência e suporte do início
                ao fim da negociação. Base no {CORRETOR.bairroBase}.
              </p>

              <div className="hero-credentials hero-enter hero-enter-delay-1">
                <span className="hero-cred-item">
                  <MapPin size={15} className="hero-cred-icon" aria-hidden="true" />
                  {CORRETOR.bairroBase}, {CORRETOR.cidade}
                </span>
                <span className="hero-cred-sep" aria-hidden="true">
                  ·
                </span>
                <span className="hero-cred-item">CRECI: {CORRETOR.creci}</span>
              </div>

              <div className="hero-actions hero-enter hero-enter-delay-2">
                <a
                  href={whatsappGeral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Falar no WhatsApp
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#avaliacoes" className="text-action">
                  Ver avaliações no Google
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-portrait-stage hero-portrait-enter">
              <div className="hero-portrait-backdrop" aria-hidden="true" />
              <div className="hero-portrait-frame">
                <img
                  src={CORRETOR.imagens.sobreRetrato}
                  alt="Eduardo Vieira, corretor de imóveis em Goiânia"
                  className="hero-portrait-img"
                />
              </div>

              <a href="#avaliacoes" className="hero-proof-plaque">
                <span className="hero-proof-score tabular">{CORRETOR.google.nota}</span>
                <span className="hero-proof-meta">
                  <FiveStars size={13} />
                  <span className="hero-proof-label tabular">
                    {CORRETOR.google.totalAvaliacoes} avaliações no Google
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Architectural Facts Band */}
        <section className="facts-band" aria-label="Destaques do atendimento">
          <div className="container">
            <div className="facts-grid" data-reveal="up">
              <div className="fact-cell">
                <p className="fact-value tabular">{CORRETOR.google.nota} no Google</p>
                <p className="fact-label tabular">
                  {CORRETOR.google.totalAvaliacoes} avaliações no Google Maps
                </p>
              </div>
              <div className="fact-cell">
                <p className="fact-value">{CORRETOR.bairroBase}</p>
                <p className="fact-label">Base de atuação em {CORRETOR.cidade}</p>
              </div>
              <div className="fact-cell">
                <p className="fact-value">Todos os dias</p>
                <p className="fact-label">Atendimento das 8h às 19h</p>
              </div>
              <div className="fact-cell">
                <p className="fact-value">Início ao fim</p>
                <p className="fact-label">Suporte completo na negociação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services — Asymmetric 1 + 2 Editorial Showcase */}
        <section id="servicos" className="section section-paper">
          <div className="container">
            <div className="section-head-split" data-reveal="up">
              <h2 className="section-title">Serviços de corretagem de imóveis em Goiânia</h2>
              <p className="section-lead">
                Eduardo Vieira atua em Goiânia com foco na compra e venda de imóveis, busca
                personalizada da melhor opção para cada perfil e acompanhamento completo do início
                ao fim da negociação.
              </p>
            </div>

            {/* Flagship Horizontal Service */}
            <article className="service-feature" data-reveal="up">
              <div className="service-feature-media">
                <img
                  src={servicoDestaque.imagem}
                  alt={servicoDestaque.imagemAlt}
                  className="service-img"
                  loading="lazy"
                />
              </div>
              <div className="service-feature-body">
                <h3 className="service-feature-title">{servicoDestaque.titulo}</h3>
                <p className="service-desc">{servicoDestaque.descricao}</p>
                <a
                  href={montarLinkWhatsApp(servicoDestaque.whatsappTexto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Conversar no WhatsApp
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>

            {/* Secondary 2-Column Editorial Pair */}
            <div className="services-pair">
              {servicosSecundarios.map((servico, index) => (
                <article
                  key={servico.id}
                  className="service-panel"
                  data-reveal="up"
                  data-stagger={index + 1}
                >
                  <div className="service-media">
                    <img
                      src={servico.imagem}
                      alt={servico.imagemAlt}
                      className="service-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-body">
                    <h3 className="service-title">{servico.titulo}</h3>
                    <p className="service-desc">{servico.descricao}</p>
                    <a
                      href={montarLinkWhatsApp(servico.whatsappTexto)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-action"
                    >
                      Conversar no WhatsApp
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About — Deep Obsidian Magazine Spread */}
        <section id="sobre" className="section section-obsidian">
          <div className="container about-grid">
            <div className="about-media" data-reveal="scale">
              <div className="about-frame-offset" aria-hidden="true" />
              <div className="about-img-frame">
                <img
                  src={CORRETOR.imagens.heroRetrato}
                  alt="Eduardo Vieira em atendimento imobiliário"
                  className="about-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-content" data-reveal="up">
              <h2 className="section-title">{CORRETOR.sobre.titulo}</h2>

              {CORRETOR.sobre.paragrafos.map((paragrafo, index) => (
                <p key={index} className="about-text">
                  {paragrafo}
                </p>
              ))}

              <ul className="differentials-list">
                {CORRETOR.diferenciais.map((item, index) => (
                  <li
                    key={item.titulo}
                    className="differential-item"
                    data-reveal="up"
                    data-stagger={index}
                  >
                    <p className="differential-title">{item.titulo}</p>
                    <p className="differential-desc">{item.descricao}</p>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappGeral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bronze"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Falar com Eduardo Vieira
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Google Reviews — Editorial Proof Plinth + Refined Quote Panels */}
        <section id="avaliacoes" className="section">
          <div className="container">
            <div className="reviews-header-bar" data-reveal="up">
              <div>
                <h2 className="section-title">Avaliações de clientes em Goiânia no Google</h2>
                <p className="section-lead" style={{ marginTop: '0.85rem' }}>
                  Transparência, honestidade, paciência e suporte do início ao fim destacados por
                  quem já negociou com Eduardo Vieira.
                </p>
              </div>

              <div className="reviews-plaque">
                <span className="reviews-big-score tabular">{CORRETOR.google.nota}</span>
                <div>
                  <FiveStars size={16} />
                  <p className="reviews-count-text tabular">
                    {CORRETOR.google.totalAvaliacoes} avaliações no Google Maps
                  </p>
                  <a
                    href={CORRETOR.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reviews-maps-link"
                  >
                    Ver no Google Maps
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="reviews-grid">
              {CORRETOR.depoimentos.map((depoimento, index) => (
                <article
                  key={depoimento.id}
                  className="review-panel"
                  data-reveal="up"
                  data-stagger={index}
                >
                  <span className="review-mark" aria-hidden="true">
                    “
                  </span>
                  <p className="review-quote">{depoimento.texto}</p>
                  <div className="review-meta">
                    <span className="review-author">{depoimento.autor}</span>
                    <FiveStars size={14} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Region of Operation — Architectural Dossier */}
        <section id="regiao" className="section section-sand">
          <div className="container">
            <div className="section-head-split" data-reveal="up">
              <h2 className="section-title">Atuação em Goiânia, com base no Setor Marista</h2>
              <p className="section-lead">
                Atendimento presencial e online em toda Goiânia, com ponto de apoio localizado no
                Setor Marista.
              </p>
            </div>

            <div className="region-grid">
              <div className="region-dossier" data-reveal="up">
                <div className="region-details">
                  <div className="region-detail-row">
                    <MapPin size={18} className="region-icon" aria-hidden="true" />
                    <div>
                      <p className="region-detail-label">Endereço</p>
                      <p className="region-detail-value">{CORRETOR.endereco}</p>
                    </div>
                  </div>

                  <div className="region-detail-row">
                    <Clock size={18} className="region-icon" aria-hidden="true" />
                    <div>
                      <p className="region-detail-label">Horário de atendimento</p>
                      <p className="region-detail-value">{CORRETOR.horario}</p>
                    </div>
                  </div>

                  <div className="region-detail-row">
                    <Phone size={18} className="region-icon" aria-hidden="true" />
                    <div>
                      <p className="region-detail-label">Telefone e WhatsApp</p>
                      <p className="region-detail-value tabular">{CORRETOR.telefone}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={CORRETOR.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    Abrir endereço no Google Maps
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="map-frame" data-reveal="scale">
                <iframe
                  title="Localização no Setor Marista, Goiânia - GO"
                  src={CORRETOR.googleMapsEmbedUrl}
                  className="map-iframe"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — Editorial Split */}
        <section id="perguntas" className="section section-paper">
          <div className="container faq-layout">
            <div className="faq-intro" data-reveal="up">
              <h2 className="section-title">
                Perguntas frequentes sobre comprar ou vender imóvel em Goiânia
              </h2>
              <p className="section-lead" style={{ marginTop: '1rem' }}>
                Respostas diretas sobre a base no Setor Marista, horários e como funciona o
                atendimento com Eduardo Vieira.
              </p>
            </div>

            <div className="faq-list">
              {CORRETOR.faq.map((item, index) => (
                <details
                  key={item.pergunta}
                  className="faq-item"
                  data-reveal="up"
                  data-stagger={index}
                >
                  <summary className="faq-question">
                    <span>{item.pergunta}</span>
                    <ChevronDown size={19} className="faq-chevron" aria-hidden="true" />
                  </summary>
                  <p className="faq-answer">{item.resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Architectural CTA */}
        <section className="closing-cta" aria-label="Chamada para contato">
          <div className="closing-grid">
            <div className="closing-content" data-reveal="up">
              <h2 className="closing-title">
                Vamos encontrar o <em>imóvel certo</em> para você?
              </h2>
              <p className="closing-text">
                Envie uma mensagem pelo WhatsApp. Atendimento direto com Eduardo Vieira, todos os
                dias das 8h às 19h.
              </p>
              <a
                href={whatsappGeral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bronze"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Chamar no WhatsApp
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="closing-media">
              <img
                src={CORRETOR.imagens.ctaFundo}
                alt="Residência contemporânea de alto padrão"
                className="closing-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contato" className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#topo" className="brand-link">
                <img src={CORRETOR.logoUrl} alt={CORRETOR.marca} className="brand-logo-img" />
                <span className="brand-text">
                  <span className="brand-name">{CORRETOR.nome}</span>
                  <span className="brand-role">{CORRETOR.profissao}</span>
                </span>
              </a>
              <p className="footer-brand-desc">
                {CORRETOR.marca}. Atendimento personalizado em {CORRETOR.cidade}, com base no{' '}
                {CORRETOR.bairroBase}.
              </p>
              <span className="footer-creci">CRECI: {CORRETOR.creci}</span>
            </div>

            <div>
              <h3 className="footer-heading">Contato</h3>
              <ul className="footer-list">
                <li>
                  <a
                    href={whatsappGeral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link tabular"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp: {CORRETOR.telefone}
                  </a>
                </li>
                <li>
                  <a href={CORRETOR.telefoneHref} className="footer-contact-link tabular">
                    <Phone size={16} aria-hidden="true" />
                    Telefone: {CORRETOR.telefone}
                  </a>
                </li>
                <li>
                  <a
                    href={CORRETOR.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link"
                  >
                    <Instagram size={16} aria-hidden="true" />
                    Instagram: {CORRETOR.instagramHandle}
                  </a>
                </li>
                <li>
                  {CORRETOR.email && CORRETOR.email !== 'a confirmar' ? (
                    <a href={`mailto:${CORRETOR.email}`} className="footer-contact-link">
                      <Mail size={16} aria-hidden="true" />
                      {CORRETOR.email}
                    </a>
                  ) : (
                    <span className="footer-contact-link">
                      <Mail size={16} aria-hidden="true" />
                      E-mail: {CORRETOR.email}
                    </span>
                  )}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Localização e horário</h3>
              <ul className="footer-list">
                <li className="footer-contact-link">
                  <MapPin size={16} aria-hidden="true" style={{ flexShrink: 0 }} />
                  <span>{CORRETOR.endereco}</span>
                </li>
                <li className="footer-contact-link">
                  <Clock size={16} aria-hidden="true" style={{ flexShrink: 0 }} />
                  <span>{CORRETOR.horario}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {CORRETOR.marca}. Todos os direitos reservados.</p>
            <div className="footer-legal-links">
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setPrivacyOpen(true)}
              >
                Política de Privacidade e Cookies
              </button>
              <span aria-hidden="true">·</span>
              <span>{CORRETOR.cidade}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Notice Banner */}
      {showCookieBanner && (
        <aside className="cookie-banner" role="region" aria-label="Aviso de cookies e privacidade">
          <p className="cookie-banner-text">
            Utilizamos apenas recursos essenciais de navegação e o mapa incorporado do Google Maps.{' '}
            <button
              type="button"
              className="cookie-inline-link"
              onClick={() => setPrivacyOpen(true)}
            >
              Política de Privacidade e Cookies
            </button>
            .
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="btn btn-bronze cookie-accept-btn"
              onClick={acceptCookies}
            >
              Entendi
            </button>
          </div>
        </aside>
      )}

      {/* Privacy & Cookies Modal */}
      {privacyOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setPrivacyOpen(false);
          }}
        >
          <div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
          >
            <div className="modal-header">
              <h2 id="privacy-modal-title" className="modal-title">
                Política de Privacidade e Cookies
              </h2>
              <button
                type="button"
                className="modal-close"
                aria-label="Fechar política de privacidade"
                onClick={() => setPrivacyOpen(false)}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="modal-body">
              <p>
                Esta política explica como o site de <strong>{CORRETOR.marca}</strong> trata
                informações de navegação, em conformidade com a Lei Geral de Proteção de Dados
                (LGPD — Lei nº 13.709/2018).
              </p>

              <h3>1. Coleta de dados</h3>
              <p>
                Este site tem caráter informativo e de apresentação profissional. Não coletamos
                dados pessoais automaticamente em formulários internos. O compartilhamento de dados
                ocorre apenas quando você opta por iniciar contato diretamente pelo WhatsApp,
                telefone ou Instagram.
              </p>

              <h3>2. Uso de cookies e serviços de terceiros</h3>
              <p>
                Armazenamos apenas uma preferência técnica local no seu navegador para lembrar que
                você visualizou o aviso de cookies. A seção de localização incorpora o{' '}
                <strong>Google Maps</strong>, que pode utilizar cookies próprios conforme a política
                de privacidade do Google.
              </p>

              <h3>3. Seus direitos e contato</h3>
              <p>
                Você pode solicitar esclarecimentos, atualização ou exclusão de informações
                compartilhadas em atendimento entrando em contato pelo telefone/WhatsApp{' '}
                <strong className="tabular">{CORRETOR.telefone}</strong> ou presencialmente na{' '}
                {CORRETOR.endereco}.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  acceptCookies();
                  setPrivacyOpen(false);
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed WhatsApp Button */}
      <a
        href={whatsappGeral}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Conversar com Eduardo Vieira pelo WhatsApp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
