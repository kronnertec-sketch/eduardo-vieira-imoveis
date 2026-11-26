import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';
import { CORRETOR, montarLinkWhatsApp } from './data/corretor';

const NAV_ITEMS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Região', href: '#regiao' },
  { label: 'Contato', href: '#contato' },
];

function ServiceIcon({ name }) {
  if (name === 'search') return <Search size={20} strokeWidth={2.2} aria-hidden="true" />;
  if (name === 'shield') return <ShieldCheck size={20} strokeWidth={2.2} aria-hidden="true" />;
  return <Home size={20} strokeWidth={2.2} aria-hidden="true" />;
}

function FiveStars({ size = 16 }) {
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappGeral = montarLinkWhatsApp();

  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo principal
      </a>

      {/* Header */}
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#topo" className="brand-link" aria-label={CORRETOR.marca}>
            {CORRETOR.logoUrl ? (
              <img src={CORRETOR.logoUrl} alt={CORRETOR.marca} className="brand-logo-img" />
            ) : (
              <span className="brand-mark" aria-hidden="true">
                <Building2 size={20} strokeWidth={2.2} />
              </span>
            )}
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

          <a
            href={whatsappGeral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold header-cta"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
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
            className="btn btn-gold mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </nav>
      )}

      <main id="conteudo-principal">
        {/* Hero */}
        <section id="topo" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <img src={CORRETOR.imagens.heroFundo} alt="" className="hero-bg-img" />
            <div className="hero-bg-scrim" />
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-meta-row hero-enter">
                <span className="hero-pill hero-pill-gold tabular">
                  <Star size={14} fill="currentColor" aria-hidden="true" />
                  {CORRETOR.google.nota} no Google ({CORRETOR.google.totalAvaliacoes} avaliações)
                </span>
                <span className="hero-pill">CRECI: {CORRETOR.creci}</span>
              </div>

              <h1 className="hero-title hero-enter hero-enter-delay-1">
                {CORRETOR.nome},{' '}
                <span className="hero-title-accent">Corretor de Imóveis</span> em Goiânia
              </h1>

              <p className="hero-subtitle hero-enter hero-enter-delay-2">
                Compra e venda de imóveis com busca personalizada, transparência e suporte do início
                ao fim da negociação. Base no {CORRETOR.bairroBase}.
              </p>

              <div className="hero-actions hero-enter hero-enter-delay-2">
                <a
                  href={whatsappGeral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Falar no WhatsApp
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a href="#avaliacoes" className="btn btn-outline-light">
                  Ver avaliações
                </a>
              </div>
            </div>

            <div className="hero-portrait-wrap hero-enter hero-enter-delay-1">
              <div className="hero-portrait-frame">
                <img
                  src={CORRETOR.imagens.heroRetrato}
                  alt="Eduardo Vieira, corretor de imóveis em Goiânia"
                  className="hero-portrait-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Floating Trust Strip */}
        <section className="trust-strip-section" aria-label="Destaques do atendimento">
          <div className="container">
            <div className="trust-strip">
              <div className="trust-item">
                <span className="trust-icon trust-icon-gold" aria-hidden="true">
                  <Star size={20} fill="currentColor" />
                </span>
                <div>
                  <p className="trust-value tabular">Nota {CORRETOR.google.nota} no Google</p>
                  <p className="trust-label tabular">
                    {CORRETOR.google.totalAvaliacoes} avaliações no Google Maps
                  </p>
                </div>
              </div>

              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="trust-value">{CORRETOR.bairroBase}</p>
                  <p className="trust-label">Atuação em {CORRETOR.cidade}</p>
                </div>
              </div>

              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="trust-value">Todos os dias</p>
                  <p className="trust-label">Atendimento das 8h às 19h</p>
                </div>
              </div>

              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <p className="trust-value">Suporte completo</p>
                  <p className="trust-label">Do início ao fim da negociação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="section">
          <div className="container">
            <div className="section-header section-header-center">
              <h2 className="section-title">Como posso ajudar você</h2>
              <div className="section-divider" aria-hidden="true" />
              <p className="section-lead">
                Atendimento direto e personalizado para quem busca comprar ou vender imóveis em
                Goiânia com segurança.
              </p>
            </div>

            <div className="services-grid">
              {CORRETOR.servicos.map((servico) => (
                <article key={servico.id} className="service-card">
                  <div className="service-media">
                    <img
                      src={servico.imagem}
                      alt={servico.imagemAlt}
                      className="service-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-body">
                    <span className="service-badge">
                      <ServiceIcon name={servico.icone} />
                    </span>
                    <h3 className="service-title">{servico.titulo}</h3>
                    <p className="service-desc">{servico.descricao}</p>
                    <a
                      href={montarLinkWhatsApp(servico.whatsappTexto)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-link"
                    >
                      Conversar no WhatsApp
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="section section-soft">
          <div className="container about-grid">
            <div className="about-media">
              <div className="about-img-frame">
                <img
                  src={CORRETOR.imagens.sobreRetrato}
                  alt="Eduardo Vieira em atendimento imobiliário"
                  className="about-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-content">
              <div>
                <h2 className="section-title">{CORRETOR.sobre.titulo}</h2>
                <div className="section-divider" aria-hidden="true" />
              </div>

              {CORRETOR.sobre.paragrafos.map((paragrafo, index) => (
                <p key={index} className="about-text">
                  {paragrafo}
                </p>
              ))}

              <ul className="differentials-list">
                {CORRETOR.diferenciais.map((item) => (
                  <li key={item.titulo} className="differential-item">
                    <CheckCircle2 size={20} className="differential-icon" aria-hidden="true" />
                    <div>
                      <p className="differential-title">{item.titulo}</p>
                      <p className="differential-desc">{item.descricao}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappGeral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar com Eduardo Vieira
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="avaliacoes" className="section">
          <div className="container">
            <div className="section-header section-header-center">
              <h2 className="section-title">Avaliações reais no Google</h2>
              <div className="section-divider" aria-hidden="true" />
              <p className="section-lead">
                O que os clientes destacam sobre o atendimento, a transparência e o suporte em cada
                negociação.
              </p>
            </div>

            <div className="reviews-summary">
              <div className="reviews-score-block">
                <span className="reviews-score tabular">{CORRETOR.google.nota}</span>
                <div>
                  <FiveStars size={18} />
                  <p className="reviews-count tabular">
                    Nota máxima baseada em {CORRETOR.google.totalAvaliacoes} avaliações no Google
                    Maps
                  </p>
                </div>
              </div>

              <a
                href={CORRETOR.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Ver no Google Maps
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="reviews-grid">
              {CORRETOR.depoimentos.map((depoimento) => (
                <article key={depoimento.id} className="review-card">
                  <p className="review-quote">“{depoimento.texto}”</p>
                  <div className="review-footer">
                    <div>
                      <p className="review-author">{depoimento.autor}</p>
                      <p className="review-source">Avaliação verificada no Google</p>
                    </div>
                    <FiveStars size={15} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Region of Operation */}
        <section id="regiao" className="section section-soft">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Atuação em Goiânia, com base no Setor Marista</h2>
              <div className="section-divider" aria-hidden="true" />
              <p className="section-lead">
                Atendimento presencial e online para toda Goiânia, com ponto de apoio no Setor
                Marista.
              </p>
            </div>

            <div className="region-grid">
              <div className="region-card">
                <div className="region-details">
                  <div className="region-detail-row">
                    <span className="region-icon" aria-hidden="true">
                      <MapPin size={19} />
                    </span>
                    <div>
                      <p className="region-detail-label">Endereço</p>
                      <p className="region-detail-value">{CORRETOR.endereco}</p>
                    </div>
                  </div>

                  <div className="region-detail-row">
                    <span className="region-icon" aria-hidden="true">
                      <Clock size={19} />
                    </span>
                    <div>
                      <p className="region-detail-label">Horário de atendimento</p>
                      <p className="region-detail-value">{CORRETOR.horario}</p>
                    </div>
                  </div>

                  <div className="region-detail-row">
                    <span className="region-icon" aria-hidden="true">
                      <Phone size={19} />
                    </span>
                    <div>
                      <p className="region-detail-label">Telefone e WhatsApp</p>
                      <p className="region-detail-value tabular">{CORRETOR.telefone}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={CORRETOR.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Abrir endereço no Google Maps
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>

              <div className="map-frame">
                <iframe
                  title="Localização no Setor Marista, Goiânia - GO"
                  src={CORRETOR.googleMapsEmbedUrl}
                  className="map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Signature CTA Banner */}
        <section className="cta-banner-section" aria-label="Chamada para contato">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-content">
                <span className="cta-banner-icon" aria-hidden="true">
                  <Phone size={22} />
                </span>
                <h2 className="cta-banner-title">
                  Vamos encontrar o <span>imóvel certo</span> para você?
                </h2>
                <p className="cta-banner-text">
                  Envie uma mensagem pelo WhatsApp. Atendimento direto com Eduardo Vieira, todos os
                  dias das 8h às 19h.
                </p>
                <a
                  href={whatsappGeral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Chamar no WhatsApp
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className="cta-banner-media">
                <img
                  src={CORRETOR.imagens.ctaFundo}
                  alt="Residência moderna de alto padrão"
                  className="cta-banner-img"
                  loading="lazy"
                />
              </div>
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
                <span className="brand-mark" aria-hidden="true">
                  <Building2 size={20} strokeWidth={2.2} />
                </span>
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
                    <MessageCircle size={17} aria-hidden="true" />
                    WhatsApp: {CORRETOR.telefone}
                  </a>
                </li>
                <li>
                  <a href={CORRETOR.telefoneHref} className="footer-contact-link tabular">
                    <Phone size={17} aria-hidden="true" />
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
                    <Instagram size={17} aria-hidden="true" />
                    Instagram: {CORRETOR.instagramHandle}
                  </a>
                </li>
                <li>
                  {CORRETOR.email && CORRETOR.email !== 'a confirmar' ? (
                    <a href={`mailto:${CORRETOR.email}`} className="footer-contact-link">
                      <Mail size={17} aria-hidden="true" />
                      {CORRETOR.email}
                    </a>
                  ) : (
                    <span className="footer-contact-link">
                      <Mail size={17} aria-hidden="true" />
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
                  <MapPin size={17} aria-hidden="true" style={{ flexShrink: 0 }} />
                  <span>{CORRETOR.endereco}</span>
                </li>
                <li className="footer-contact-link">
                  <Clock size={17} aria-hidden="true" style={{ flexShrink: 0 }} />
                  <span>{CORRETOR.horario}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {CORRETOR.marca}. Todos os direitos reservados.</p>
            <p>{CORRETOR.cidade}</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a
        href={whatsappGeral}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Conversar com Eduardo Vieira pelo WhatsApp"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
