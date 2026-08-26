'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Droplets, HeartHandshake, Landmark, Menu, Scale, ShieldCheck, Sparkles, Stethoscope, X } from 'lucide-react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/749714053_18017948759884732_2203298396947157402_n-FPDs2oozCwMmxzaaNutsRgv7euxSXy.jpg',
  dance: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-25%20at%2017.10.56-SnqdTQziIcvIjiXIscne8cpWcF0xcK.jpeg',
  yellow: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-25%20at%2017.10.55-MnwORfBjkilAN8jv2UTsM0mmrrYOr0.jpeg',
}

const milestones = [
  { year: '1980s', title: 'As raízes', text: 'No Guarani, aprendeu cedo que cuidado também é ação. Entre brincadeiras de rua e a rotina simples de casa, ajudava a buscar água no chafariz do bairro.', icon: HeartHandshake, accent: 'yellow' },
  { year: '18 anos', title: 'A travessia', text: 'Mudou-se para Mogi das Cruzes para cursar Direito. Trabalhava o dia inteiro em uma agência bancária e estudava à noite. Trem, ônibus e disciplina.', icon: BriefcaseBusiness, accent: 'green' },
  { year: '23 anos', title: 'Primeiro compromisso', text: 'Tornou-se procurador municipal. A partir dali, o direito encontrou a vida real: orçamento, serviço público e o desafio de fazer a gestão funcionar.', icon: Scale, accent: 'yellow' },
  { year: '+20 anos', title: 'Experiência que se move', text: 'Assessorou mais de 40 prefeituras na Bahia. Viu de perto gestões que avançam e gestões que precisam mudar — sempre com dados e responsabilidade.', icon: Landmark, accent: 'green' },
  { year: '2024', title: 'Um passo de coragem', text: 'Disputou a Prefeitura de Vitória da Conquista. A campanha aproximou ainda mais Marcos das ruas, das histórias e das urgências da sua cidade.', icon: Sparkles, accent: 'yellow' },
  { year: '2026', title: 'Agora é regional', text: 'Como pré-candidato a deputado estadual pelo PDT, leva sua experiência para fiscalizar, cobrar e construir resultados para o Sudoeste.', icon: ShieldCheck, accent: 'green' },
]

const priorities = [
  { title: 'Água', text: 'Cobrar para que a água de qualidade chegue com regularidade a todos os municípios.', icon: Droplets },
  { title: 'Saúde', text: 'Fiscalizar a saúde pública e buscar incentivos para ampliar o atendimento.', icon: Stethoscope },
  { title: 'Serviços', text: 'Acompanhar de perto a Embasa e exigir respeito à população.', icon: ShieldCheck },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.14 })
    document.querySelectorAll('.reveal, .reveal-section').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
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
  useReveal()
  const showSticky = useStickyCta()
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="campaign-shell">
      <header className="site-header"><a className="brand" href="#inicio" aria-label="Ir para o início"><img className="brand-logo" src="/logo/marcos-adriano-branca.png" alt="Dr. Marcos Adriano Deputado Estadual 12999" width={899} height={331} decoding="async" /></a><button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}><a href="#historia" onClick={closeMenu}>História</a><a href="#linha-do-tempo" onClick={closeMenu}>Trajetória</a><a href="#bandeiras" onClick={closeMenu}>Bandeiras</a><a className="nav-cta" href="#apoie" onClick={closeMenu}>Faça parte <ArrowUpRight data-icon="inline-end" /></a></nav></header>

      <section id="inicio" className="hero-section reveal-section"><div className="hero-grid-lines" aria-hidden="true" /><div className="hero-copy reveal"><p className="eyebrow">PDT · Deputado estadual · Bahia</p><h1>Uma história<br /><em>que não para.</em></h1><p className="hero-lede">Do Guarani para toda a Bahia. Advogado, técnico contábil e ex-procurador municipal — 20 anos cobrando resultado de dentro da gestão pública.</p><div className="hero-actions"><a href="#historia" className="button button-yellow">Conheça a história <ArrowDown data-icon="inline-end" /></a><a href="#apoie" className="text-link">Aproxime-se</a></div></div><div className="hero-visual reveal"><div className="hero-sun" /><div className="hero-green" /><img src={images.hero} alt="Marcos Adriano sorrindo com terno azul-marinho" loading="eager" decoding="async" fetchPriority="high" /><div className="hero-tag">DR.<br /><strong>MARCOS</strong><br /><small>ADRIANO</small></div></div><div className="hero-number"><small>número</small><strong>12999</strong></div><div className="hero-ribbon" aria-label="Trabalho que aproxima. Conquista merece mais. Número 12999."><div className="hero-ribbon-track"><span>TRABALHO QUE APROXIMA&nbsp;&nbsp;×&nbsp;&nbsp; CONQUISTA MERECE MAIS&nbsp;&nbsp;×&nbsp;&nbsp; 12999&nbsp;&nbsp;×&nbsp;&nbsp;</span><span aria-hidden="true">TRABALHO QUE APROXIMA&nbsp;&nbsp;×&nbsp;&nbsp; CONQUISTA MERECE MAIS&nbsp;&nbsp;×&nbsp;&nbsp; 12999&nbsp;&nbsp;×&nbsp;&nbsp;</span></div></div></section>

      <section className="proof-strip reveal-section" aria-label="Experiência profissional"><span><BriefcaseBusiness aria-hidden="true" />Advogado</span><span><Scale aria-hidden="true" />Técnico contábil</span><span><Landmark aria-hidden="true" />+20 anos de gestão</span><span><ShieldCheck aria-hidden="true" />+40 prefeituras</span></section>

      <section id="historia" className="story-section section-wrap reveal-section"><div className="section-kicker">01 / antes do cargo</div><div className="story-intro"><div className="reveal"><h2>Antes de ser<br /><span>candidato,</span></h2></div><div className="story-lede reveal"><p className="lead">Toda trajetória começa em algum lugar. A de Marcos começa no Guarani, em Vitória da Conquista — e segue carregando as pessoas que ensinaram o valor de estar presente.</p><p>Filho de Caboco, um caçambeiro, e de Maria Celeste, diretora de escola, cresceu entre três irmãos em uma casa onde trabalho e cuidado andavam juntos.</p></div></div><div className="story-photo reveal"><img src={images.dance} alt="Marcos Adriano em uma ação de campanha junto à comunidade" loading="lazy" decoding="async" /><div className="photo-caption">“Eu continuo sendo<br /><strong>do Guarani.</strong>”</div></div></section>

      <section id="linha-do-tempo" className="timeline-section reveal-section"><div className="section-wrap"><div className="section-kicker light">02 / uma vida em movimento</div><div className="timeline-heading"><h2 className="reveal">O caminho<br /><span>até aqui.</span></h2><p className="reveal">Não existe atalho para uma história construída com presença. Cada fase deixou uma ferramenta, uma pergunta e um compromisso.</p></div><div className="timeline">{milestones.map((item, index) => { const Icon = item.icon; return <article className={`timeline-item reveal ${item.accent}`} key={item.year}><div className="timeline-marker"><Icon aria-hidden="true" /></div><div className="timeline-year">{item.year}</div><div className="timeline-card"><div className="timeline-card-top"><span>0{index + 1}</span><span className="timeline-line" /></div><h3>{item.title}</h3><p>{item.text}</p></div></article> })}</div></div></section>

      <section className="quote-section reveal-section"><div className="quote-mark" aria-hidden="true">“</div><blockquote>Desde menino ele já era trabalhador. Entregava leite pela vizinhança, cumprimentava todo mundo. O tempo passou, mas o respeito e a dedicação continuam os mesmos.</blockquote><div className="quote-person"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mB8aOMDG0bFt4REtxEO8t2uaDUfz88.png" alt="Seu Edivaldo, morador da comunidade" loading="lazy" decoding="async" /><span>Seu Edivaldo<br />Morador da comunidade</span></div></section>

      <section id="bandeiras" className="priorities-section section-wrap reveal-section"><div className="section-kicker">03 / mandato presente</div><div className="priorities-heading"><h2 className="reveal">O que eu<br /><span>vou cobrar.</span></h2><p className="reveal">Deputado estadual não executa obra: fiscaliza, cobra e representa. É assim que a experiência vira presença no mandato.</p></div><div className="priority-grid">{priorities.map((item, index) => { const Icon = item.icon; return <article className="priority-card reveal" key={item.title}><div className="priority-icon"><Icon aria-hidden="true" /></div><b>0{index + 1}</b><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight className="priority-arrow" aria-hidden="true" /></article> })}</div></section>

      <section className="manifesto-section reveal-section"><div className="manifesto-copy"><div className="section-kicker light">04 / compromisso</div><h2>Conquista<br /><span>merece mais.</span></h2><p>Mais planejamento. Mais transparência. Água, saúde e serviços com fiscalização de verdade — não promessa de gabinete.</p><a className="button button-outline" href="#apoie">Vamos construir <ArrowUpRight data-icon="inline-end" /></a></div><div className="manifesto-image"><img src={images.yellow} alt="Marcos Adriano em visita à comunidade" loading="lazy" decoding="async" /><div className="image-stamp">TRABALHO<br />QUE APROXIMA</div></div></section>

      <section id="apoie" className="support-section section-wrap reveal-section"><div className="support-copy"><div className="section-kicker">05 / perto é melhor</div><h2>Essa história<br /><span>também é sua.</span></h2><p>Fique por dentro de cada agenda no Sudoeste e ajude a construir, desde agora, uma representação que começa ouvindo você.</p></div><form className="support-form" onSubmit={async (event) => { event.preventDefault(); setStatus('loading'); const data = new FormData(event.currentTarget); try { const response = await fetch('/api/apoio', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), email: data.get('email') }) }); if (!response.ok) throw new Error('request-failed'); setStatus('success') } catch { setStatus('error') } }}>{status === 'success' ? <div className="success-message"><strong>Você chegou junto.</strong><p>Cadastro recebido. Obrigado por fazer parte.</p><button type="button" className="text-link" onClick={() => setStatus('idle')}>Cadastrar outra pessoa <ArrowUpRight data-icon="inline-end" /></button></div> : <><label htmlFor="name">Seu nome</label><input id="name" name="name" required placeholder="Como podemos chamar você?" /><label htmlFor="email">Seu melhor e-mail</label><input id="email" name="email" type="email" required placeholder="voce@exemplo.com" /><button className="button button-blue" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando...' : <>Quero fazer parte <ArrowUpRight data-icon="inline-end" /></>}</button>{status === 'error' && <div className="form-error"><p>Não conseguimos enviar agora. Tente de novo em instantes.</p><button type="submit" className="text-link">Tentar novamente <ArrowUpRight data-icon="inline-end" /></button></div>}<small>Os dizeres legais e dados do comitê devem ser revisados pela equipe jurídica antes da publicação.</small></>}</form></section>
      <section className="social-cta-section reveal-section" aria-labelledby="social-cta-title"><div className="social-cta-inner"><p className="section-kicker">06 / acompanhe de perto</p><h2 id="social-cta-title">Siga essa<br /><span>caminhada.</span></h2><p>Acompanhe as ideias, os bastidores e cada passo de Marcos Adriano nas redes sociais.</p><div className="social-cta-actions"><a className="button button-yellow" href="https://www.instagram.com/drmarcosadrianoo/" target="_blank" rel="noreferrer">Seguir no Instagram <ArrowUpRight data-icon="inline-end" /></a><a className="button button-outline-blue" href="https://www.facebook.com/dr.marcos70/" target="_blank" rel="noreferrer">Acompanhar no Facebook <ArrowUpRight data-icon="inline-end" /></a></div></div></section>

      <div className={`sticky-cta${showSticky && !menuOpen ? ' is-visible' : ''}`} aria-hidden={!showSticky || menuOpen}><a className="button button-yellow" href="#apoie">Quero fazer parte <ArrowUpRight data-icon="inline-end" /></a></div>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">M</span><div><strong>Marcos Adriano</strong><small>Deputado estadual · 12999</small></div></div><div className="footer-links"><a href="#inicio">Início</a><a href="#historia">História</a><a href="#apoie">Contato</a></div><div className="footer-social" aria-label="Redes sociais"><strong className="social-cta">Siga e acompanhe de perto</strong><div className="social-links"><a href="https://www.instagram.com/drmarcosadrianoo/" target="_blank" rel="noreferrer" aria-label="Seguir Marcos Adriano no Instagram"><ArrowUpRight aria-hidden="true" /><span>Instagram</span></a><a href="https://www.facebook.com/dr.marcos70/" target="_blank" rel="noreferrer" aria-label="Acompanhar Marcos Adriano no Facebook"><ArrowUpRight aria-hidden="true" /><span>Facebook</span></a></div></div><div className="footer-legal">Material sujeito à legislação eleitoral vigente.<br />CNPJ e demais informações legais serão inseridos pela equipe responsável.</div><p className="copyright">© 2026 Marcos Adriano · PDT</p></footer>
    </main>
  )
}
