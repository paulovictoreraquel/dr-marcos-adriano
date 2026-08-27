'use client'

import Image from 'next/image'
import { useEffect, useState, type SVGProps } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Droplets,

  HeartHandshake,

  Landmark,
  Menu,
  Pause,
  Play,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react'
import { trackCampaignEvent } from '@/lib/analytics'

function Instagram(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={2} y={2} width={20} height={20} rx={5} /><circle cx={12} cy={12} r={4} /><circle cx={17.5} cy={6.5} r={0.5} fill="currentColor" /></svg>
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}

function Youtube(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
}

const marqueeItems = ['Trabalho que aproxima', 'Conquista merece mais', '12999', 'Bahia presente']
const marqueeSequence = Array.from({ length: 3 }, () => marqueeItems).flat()

const stats = [
  { label: 'Advogado', detail: 'Atuação jurídica', icon: BriefcaseBusiness },
  { label: 'Técnico contábil', detail: 'Gestão com método', icon: Scale },
  { label: '+20 anos', detail: 'Experiência pública', icon: Landmark },
  { label: '+40 prefeituras', detail: 'Realidades acompanhadas', icon: ShieldCheck },
]

const gallery = [
  { src: '/images/gallery/marcos-historia-01.webp', alt: 'Registro de infância de Marcos Adriano com familiares' },
  { src: '/images/gallery/marcos-historia-02.webp', alt: 'Retrato antigo da família de Marcos Adriano reunida' },
  { src: '/images/gallery/marcos-historia-04.webp', alt: 'Marcos Adriano ainda criança em retrato de família' },
  { src: '/images/gallery/marcos-historia-05.webp', alt: 'Marcos Adriano em encontro com uma apoiadora' },
  { src: '/images/gallery/marcos-historia-06.webp', alt: 'Marcos Adriano sentado durante uma conversa' },
  { src: '/images/gallery/marcos-historia-07.webp', alt: 'Marcos Adriano com a camisa amarela da campanha 12999' },
  { src: '/images/gallery/marcos-historia-08.webp', alt: 'Marcos Adriano caminhando durante uma visita à comunidade' },
]

const milestones = [
  { year: '1980', title: 'As raízes', text: 'No Guarani, aprendeu cedo que cuidado também é ação. Entre brincadeiras de rua e a rotina simples de casa, ajudava a buscar água no chafariz do bairro.', icon: HeartHandshake },
  { year: '18 anos', title: 'A travessia', text: 'Mudou-se para Mogi das Cruzes para cursar Direito. Trabalhava o dia inteiro em uma agência bancária e estudava à noite. Trem, ônibus e disciplina.', icon: BriefcaseBusiness },
  { year: '23 anos', title: 'Primeiro compromisso', text: 'Tornou-se procurador municipal. A partir dali, o direito encontrou a vida real: orçamento, serviço público e o desafio de fazer a gestão funcionar.', icon: Scale },
  { year: '+20 anos', title: 'Experiência que se move', text: 'Assessorou mais de 40 prefeituras na Bahia. Viu de perto gestões que avançam e gestões que precisam mudar, sempre com dados e responsabilidade.', icon: Landmark },
  { year: '2024', title: 'Um passo de coragem', text: 'Disputou a Prefeitura de Vitória da Conquista. A campanha aproximou ainda mais Marcos das ruas, das histórias e das urgências da sua cidade.', icon: Sparkles },
  { year: '2026', title: 'Agora é regional', text: 'Como pré-candidato a deputado estadual pelo PDT, leva sua experiência para fiscalizar, cobrar e construir resultados para o Sudoeste.', icon: ShieldCheck },
]

const priorities = [
  { title: 'Água', text: 'Cobrar para que a água de qualidade chegue com regularidade a todos os municípios.', icon: Droplets },
  { title: 'Saúde', text: 'Fiscalizar a saúde pública e buscar incentivos para ampliar o atendimento.', icon: Stethoscope },
  { title: 'Serviços', text: 'Acompanhar de perto a Embasa e exigir respeito à população.', icon: ShieldCheck },
]

const faqs = [
  { question: 'Quem é Marcos Adriano?', answer: 'Marcos Adriano é advogado, técnico contábil e ex-procurador municipal. Sua trajetória reúne mais de 20 anos de experiência em gestão pública na Bahia.' },
  { question: 'Qual cargo Marcos Adriano pretende disputar?', answer: 'Marcos Adriano é pré-candidato a deputado estadual pelo PDT na Bahia, com atuação voltada especialmente para Vitória da Conquista e o Sudoeste baiano.' },
  { question: 'Quais são as prioridades apresentadas?', answer: 'As prioridades apresentadas são água, saúde e qualidade dos serviços públicos. A proposta enfatiza fiscalização, cobrança e representação responsável no mandato estadual.' },
  { question: 'Qual é a experiência de Marcos Adriano?', answer: 'Marcos Adriano atuou como procurador municipal e assessorou mais de 40 prefeituras. Essa experiência reúne direito, contabilidade e acompanhamento direto da administração pública.' },
  { question: 'Como acompanhar a agenda de Marcos Adriano?', answer: 'A agenda, as ideias e os bastidores da caminhada podem ser acompanhados pelos perfis oficiais de Marcos Adriano no Instagram e no Facebook.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

function useCampaignMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let active = true
    let cleanup: () => void = () => {}

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, scrollModule]) => {
      if (!active) return
      const gsap = gsapModule.gsap
      const ScrollTrigger = scrollModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const context = gsap.context(() => {
        gsap.from('.hero-copy > *', {
          opacity: 0,
          y: 32,
          duration: 0.72,
          stagger: 0.08,
          ease: 'power3.out',
        })
        gsap.from('.hero-visual-frame', { opacity: 0, x: 40, duration: 0.9, ease: 'power3.out' })
        gsap.to('.hero-sun', {
          rotate: 18,
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.8 },
        })

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 28,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          })
        })

        gsap.from('.stat-card', {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-section', start: 'top 86%', once: true },
        })

        const mobileTimeline = window.matchMedia('(max-width: 800px)').matches
        gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            x: mobileTimeline ? 0 : index % 2 === 0 ? -40 : 40,
            y: mobileTimeline ? 28 : 0,
            duration: 0.72,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 86%', once: true },
          })
        })

        gsap.fromTo('.timeline-progress',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.timeline-list', start: 'top 75%', end: 'bottom 60%', scrub: 0.6 },
          },
        )

        const marquee = gsap.to('.hero-ribbon-track', {
          xPercent: -50,
          duration: 26,
          ease: 'none',
          repeat: -1,
        })
        ScrollTrigger.create({
          trigger: '.hero-ribbon',
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => marquee.play(),
          onEnterBack: () => marquee.play(),
          onLeave: () => marquee.pause(),
          onLeaveBack: () => marquee.pause(),
        })

        const galleryTween = gsap.to('.gallery-auto-track', {
          xPercent: -50,
          duration: 48,
          ease: 'none',
          repeat: -1,
        })
        const handleGalleryToggle = (event: Event) => galleryTween.paused((event as CustomEvent<{ paused: boolean }>).detail.paused)
        const playGallery = () => {
          if (!document.documentElement.hasAttribute('data-gallery-paused')) galleryTween.play()
        }
        window.addEventListener('gallery-toggle', handleGalleryToggle)
        ScrollTrigger.create({
          trigger: '.gallery-viewport',
          start: 'top bottom',
          end: 'bottom top',
          onEnter: playGallery,
          onEnterBack: playGallery,
          onLeave: () => galleryTween.pause(),
          onLeaveBack: () => galleryTween.pause(),
        })

        gsap.from('.gallery-card', {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-viewport', start: 'top 88%', once: true },
        })

        gsap.from('.footer-column', {
          opacity: 0,
          y: 20,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.site-footer', start: 'top 90%', once: true },
        })

        cleanup = () => {
          window.removeEventListener('gallery-toggle', handleGalleryToggle)
          context.revert()
        }
      })
    })

    return () => {
      active = false
      cleanup()
    }
  }, [])
}

function useStickyCta() {
  const [showSticky, setShowSticky] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), { threshold: 0 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])
  return showSticky
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [galleryPaused, setGalleryPaused] = useState(false)
  useCampaignMotion()
  const showSticky = useStickyCta()

  const handleGalleryToggle = () => {
    const paused = !galleryPaused
    setGalleryPaused(paused)
    document.documentElement.toggleAttribute('data-gallery-paused', paused)
    window.dispatchEvent(new CustomEvent('gallery-toggle', { detail: { paused } }))
    trackCampaignEvent('gallery_interaction', { direction: paused ? 'pause' : 'play' })
  }

  return (
    <div className="campaign-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Ir para o início">
            <Image className="brand-logo" src="/logo/marcos-adriano-branca.png" alt="Dr. Marcos Adriano, deputado estadual 12999" width={899} height={331} sizes="(max-width: 800px) 216px, 272px" priority />
          </a>
          <button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="navegacao-principal" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav id="navegacao-principal" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
            <a href="#historia" onClick={() => setMenuOpen(false)}>História</a>
            <a href="#trajetoria" onClick={() => setMenuOpen(false)}>Trajetória</a>
            <a href="#bandeiras" onClick={() => setMenuOpen(false)}>Bandeiras</a>
            <a className="nav-cta" href="#apoie" onClick={() => { setMenuOpen(false); trackCampaignEvent('cta_click', { location: 'navigation' }) }}>Faça parte <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo-principal">
        <section id="inicio" className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">PDT · Deputado estadual · Bahia</p>
            <h1>Uma história <em>que não para.</em></h1>
            <p className="hero-lede">Do Guarani para toda a Bahia. Direito, contabilidade e mais de 20 anos de experiência em gestão pública.</p>
            <div className="hero-actions">
              <a href="#historia" className="button button-yellow" onClick={() => trackCampaignEvent('cta_click', { location: 'hero_story' })}>Conheça a história <ArrowDown aria-hidden="true" /></a>
              <a href="#bandeiras" className="text-link">Ver prioridades</a>
            </div>
          </div>
          <div className="hero-visual-frame">
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-green" aria-hidden="true" />
            <Image className="hero-portrait" src="/images/hero-marcos.webp" alt="Marcos Adriano sorrindo com terno azul-marinho" width={1080} height={1080} sizes="(max-width: 800px) 352px, 44vw" preload fetchPriority="high" />
            <div className="hero-tag" aria-hidden="true"><small>Dr.</small><strong>Marcos</strong><span>Adriano</span></div>
          </div>
          <div className="hero-number"><small>Número</small><strong>12999</strong></div>
          <div className="hero-ribbon" role="img" aria-label="Trabalho que aproxima. Conquista merece mais. Número 12999.">
            <div className="hero-ribbon-track" aria-hidden="true">
              {[0, 1].map((group) => <div className="hero-ribbon-group" key={group}>{marqueeSequence.map((item, index) => <span key={`${group}-${index}-${item}`}>{item}<b>·</b></span>)}</div>)}
            </div>
          </div>
        </section>

        <section className="stats-section" aria-labelledby="stats-title">
          <h2 id="stats-title" className="sr-only">Experiência profissional</h2>
          <div className="stats-grid">
            {stats.map((item, index) => {
              const Icon = item.icon
              return <article className="stat-card" key={item.label}><span className="stat-index">0{index + 1}</span><Icon aria-hidden="true" /><div><strong>{item.label}</strong><small>{item.detail}</small></div></article>
            })}
          </div>
        </section>

        <section id="historia" className="story-section section-wrap">
          <div className="story-copy" data-reveal>
            <p className="section-kicker">01 / antes do cargo</p>
            <h2>Antes de ser <span>candidato,</span></h2>
            <div className="story-text">
              <p className="lead">A trajetória de Marcos começa no Guarani, em Vitória da Conquista, onde aprendeu o valor de estar presente.</p>
              <p>Filho de Caboco, um caçambeiro, e de Maria Celeste, diretora de escola, cresceu entre três irmãos em uma casa onde trabalho e cuidado andavam juntos.</p>
            </div>
          </div>
          <figure className="story-photo" data-reveal>
            <Image src="/images/gallery/marcos-historia-02.webp" alt="Família de Marcos Adriano reunida em um registro antigo" width={800} height={1000} sizes="(max-width: 800px) calc(100vw - 48px), 560px" />
            <figcaption>As raízes que ensinaram o valor da presença.</figcaption>
          </figure>
        </section>

        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="gallery-header section-wrap" data-reveal>
            <div><p className="section-kicker light">02 / memórias e presença</p><h2 id="gallery-title">Uma vida <span>perto de gente.</span></h2><p>Da história de família aos encontros de hoje: registros de uma caminhada construída com presença.</p></div>
            <div className="gallery-controls"><span>07 fotografias</span><button type="button" onClick={handleGalleryToggle} aria-label={galleryPaused ? 'Continuar reprodução automática' : 'Pausar reprodução automática'}>{galleryPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</button></div>
          </div>
          <div className="gallery-viewport" aria-label="Galeria automática de fotografias de Marcos Adriano">
            <div className="gallery-auto-track">
              {[0, 1].map((group) => <div className="gallery-group" aria-hidden={group === 1} key={group}>{gallery.map((photo, index) => <figure className="gallery-card" key={`${group}-${photo.src}`}><Image src={photo.src} alt={group === 0 ? photo.alt : ''} width={800} height={1000} sizes="(max-width: 800px) 78vw, 28vw" /><figcaption><span>{String(index + 1).padStart(2, '0')}</span><span>Marcos Adriano</span></figcaption></figure>)}</div>)}
            </div>
          </div>
          <p className="gallery-hint">Carrossel automático · use o controle para pausar</p>
        </section>

        <section id="trajetoria" className="timeline-section">
          <div className="section-wrap">
            <div className="timeline-heading" data-reveal><div><p className="section-kicker light">03 / uma vida em movimento</p><h2>O caminho <span>até aqui.</span></h2></div><p>Não existe atalho para uma história construída com presença. Cada fase deixou uma ferramenta e um compromisso.</p></div>
            <div className="timeline-list">
              <span className="timeline-rail" aria-hidden="true"><span className="timeline-progress" /></span>
              {milestones.map((item, index) => {
                const Icon = item.icon
                return <article className={`timeline-card timeline-card-${index % 2 === 0 ? 'left' : 'right'}`} key={item.year}><div className="timeline-node"><Icon aria-hidden="true" /></div><div className="timeline-card-meta"><span>0{index + 1}</span><strong>{item.year}</strong></div><h3>{item.title}</h3><p>{item.text}</p></article>
              })}
            </div>
          </div>
        </section>

        <section className="testimonial-section section-wrap" aria-labelledby="testimonial-title">
          <figure className="testimonial-photo" data-reveal><Image src="/images/seu-edivaldo.webp" alt="Seu Edivaldo, morador da comunidade" width={640} height={640} sizes="(max-width: 800px) 100vw, 38vw" /></figure>
          <div className="testimonial-copy" data-reveal><p className="section-kicker">04 / quem conhece de perto</p><div className="quote-mark" aria-hidden="true">“</div><blockquote id="testimonial-title">Desde menino ele já era trabalhador. Entregava leite pela vizinhança e cumprimentava todo mundo. O tempo passou, mas o respeito e a dedicação continuam os mesmos.</blockquote><p className="testimonial-author"><strong>Seu Edivaldo</strong><span>Morador da comunidade</span></p></div>
        </section>

        <section id="bandeiras" className="priorities-section section-wrap">
          <div className="priorities-heading" data-reveal><div><p className="section-kicker">05 / mandato presente</p><h2>O que eu <span>vou cobrar.</span></h2></div><p>Deputado estadual não executa obra: fiscaliza, cobra e representa. É assim que a experiência vira presença no mandato.</p></div>
          <div className="priority-grid">{priorities.map((item, index) => { const Icon = item.icon; return <article className="priority-card" data-reveal key={item.title}><div className="priority-card-top"><div className="priority-icon"><Icon aria-hidden="true" /></div><b>0{index + 1}</b></div><div><h3>{item.title}</h3><p>{item.text}</p></div></article> })}</div>
        </section>

        <section className="manifesto-section">
          <div className="manifesto-copy" data-reveal><p className="section-kicker light">06 / compromisso</p><h2>Conquista <span>merece mais.</span></h2><p>Mais planejamento. Mais transparência. Água, saúde e serviços com fiscalização de verdade, não promessa de gabinete.</p><a className="button button-outline" href="#apoie" onClick={() => trackCampaignEvent('cta_click', { location: 'manifesto' })}>Vamos construir <ArrowUpRight aria-hidden="true" /></a></div>
          <figure className="manifesto-image"><Image src="/images/gallery/marcos-historia-07.webp" alt="Marcos Adriano usando a camisa amarela da campanha 12999" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Trabalho que aproxima</figcaption></figure>
        </section>

        <section className="faq-section section-wrap" aria-labelledby="faq-title">
          <div className="faq-heading" data-reveal><p className="section-kicker">07 / respostas diretas</p><h2 id="faq-title">Conheça a <span>caminhada.</span></h2><p>Informações objetivas sobre trajetória, experiência e prioridades.</p></div>
          <div className="faq-list">{faqs.map((item, index) => <details data-reveal key={item.question} id={`faq-${index + 1}`}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section id="apoie" className="support-section section-wrap">
          <div className="support-copy" data-reveal><p className="section-kicker">08 / perto é melhor</p><h2>Essa história <span>também é sua.</span></h2><p>Fique por dentro de cada agenda no Sudoeste e ajude a construir uma representação que começa ouvindo você.</p></div>
          <form className="support-form" aria-busy={status === 'loading'} onSubmit={async (event) => {
            event.preventDefault(); setStatus('loading'); trackCampaignEvent('support_submit', { location: 'support_form' }); const data = new FormData(event.currentTarget)
            try { const response = await fetch('/api/apoio', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), email: data.get('email') }) }); if (!response.ok) throw new Error('request-failed'); setStatus('success'); trackCampaignEvent('support_success', { location: 'support_form' }) } catch { setStatus('error') }
          }}>
            <div aria-live="polite">{status === 'success' ? <div className="success-message"><strong>Você chegou junto.</strong><p>Cadastro recebido. Obrigado por fazer parte.</p><button type="button" className="text-link" onClick={() => setStatus('idle')}>Cadastrar outra pessoa</button></div> : <><label htmlFor="name">Seu nome</label><input id="name" name="name" autoComplete="name" required placeholder="Como podemos chamar você?" /><label htmlFor="email">Seu melhor e-mail</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="voce@exemplo.com" aria-invalid={status === 'error'} aria-describedby={status === 'error' ? 'form-error' : undefined} /><button className="button button-blue" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando…' : <>Quero fazer parte <ArrowUpRight aria-hidden="true" /></>}</button>{status === 'error' && <p id="form-error" className="form-error">Não conseguimos enviar agora. Revise os dados e tente novamente.</p>}<small>Os dizeres legais e dados do comitê devem ser revisados pela equipe jurídica antes da publicação.</small></>}</div>
          </form>
        </section>

        <section className="social-cta-section" aria-labelledby="social-title">
          <div className="social-cta-layout">
            <div className="social-cta-inner" data-reveal><p className="section-kicker">09 / acompanhe de perto</p><h2 id="social-title">Siga essa <span>caminhada.</span></h2><p>Acompanhe as ideias, os bastidores e cada passo de Marcos Adriano nas redes sociais.</p><div className="social-cta-actions"><a className="button button-blue" href="https://www.instagram.com/drmarcosadrianoo/" target="_blank" rel="noreferrer" onClick={() => trackCampaignEvent('social_click', { network: 'instagram' })}>Seguir no Instagram <ArrowUpRight aria-hidden="true" /></a><a className="button button-outline-blue" href="https://www.facebook.com/dr.marcos70/" target="_blank" rel="noreferrer" onClick={() => trackCampaignEvent('social_click', { network: 'facebook' })}>Ver no Facebook <ArrowUpRight aria-hidden="true" /></a></div></div>
            <figure className="social-cta-visual" data-reveal><Image src="/images/gallery/marcos-historia-08.webp" alt="Marcos Adriano caminhando durante uma visita à comunidade" width={800} height={1000} sizes="(max-width: 800px) calc(100vw - 32px), 40vw" /><figcaption>Presença que caminha junto</figcaption></figure>
          </div>
        </section>
      </main>

      <div className={`sticky-cta${showSticky && !menuOpen ? ' is-visible' : ''}`} aria-hidden={!showSticky || menuOpen}><a className="button button-yellow" href="#apoie" tabIndex={showSticky && !menuOpen ? 0 : -1} onClick={() => trackCampaignEvent('cta_click', { location: 'mobile_sticky' })}>Quero fazer parte <ArrowUpRight aria-hidden="true" /></a></div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-column footer-identity"><a className="footer-brand" href="#inicio" aria-label="Voltar ao início"><Image src="/logo/marcos-adriano-branca.png" alt="Dr. Marcos Adriano, deputado estadual 12999" width={899} height={331} sizes="(max-width: 800px) 256px, 288px" /></a><p>Trabalho que aproxima.<br />Presença que transforma.</p></div>
          <nav className="footer-column footer-links" aria-label="Navegação do rodapé"><strong>Navegue</strong><a href="#inicio">Início</a><a href="#historia">História</a><a href="#trajetoria">Trajetória</a><a href="#bandeiras">Bandeiras</a><a href="#apoie">Contato</a></nav>
          <div className="footer-column footer-social"><strong>Acompanhe</strong><div><a href="https://www.instagram.com/drmarcosadrianoo/" target="_blank" rel="noreferrer" aria-label="Instagram de Marcos Adriano"><Instagram aria-hidden="true" />Instagram</a><a href="https://www.facebook.com/dr.marcos70/" target="_blank" rel="noreferrer" aria-label="Facebook de Marcos Adriano"><Facebook aria-hidden="true" />Facebook</a><span><Youtube aria-hidden="true" />YouTube em breve</span></div></div>
          <div className="footer-column footer-number" aria-label="Número 12999"><span>Vote</span><strong>12999</strong><small>Deputado estadual · PDT</small></div>
        </div>
        <div className="footer-bottom"><p className="footer-legal">Material sujeito à legislação eleitoral vigente. CNPJ e demais informações legais serão inseridos pela equipe responsável.</p><p className="copyright">© 2026 Marcos Adriano · PDT</p></div>
      </footer>
    </div>
  )
}
