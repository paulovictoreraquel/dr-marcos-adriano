import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const gtmId = process.env.NEXT_PUBLIC_GTM_ID
const gaId = process.env.NEXT_PUBLIC_GA_ID
const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const title = 'Marcos Adriano | Pré-candidato a deputado estadual pela Bahia'
const description = 'Conheça a trajetória, a experiência em gestão pública e as prioridades de Marcos Adriano para Vitória da Conquista e o Sudoeste da Bahia.'
const ogImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/749714053_18017948759884732_2203298396947157402_n-FPDs2oozCwMmxzaaNutsRgv7euxSXy.jpg'

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  title,
  description,
  applicationName: 'Marcos Adriano 12999',
  authors: [{ name: 'Equipe Marcos Adriano' }],
  creator: 'Equipe Marcos Adriano',
  category: 'Política',
  keywords: ['Marcos Adriano', 'deputado estadual', 'Bahia', 'Vitória da Conquista', 'Sudoeste da Bahia', 'PDT', '12999'],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: 'Marcos Adriano 12999',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: ogImage, width: 1080, height: 1080, alt: 'Marcos Adriano, pré-candidato a deputado estadual pela Bahia' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#092f73',
  width: 'device-width',
  initialScale: 1,
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marcos Adriano',
  description: 'Advogado, técnico contábil, ex-procurador municipal e pré-candidato a deputado estadual pelo PDT na Bahia.',
  affiliation: { '@type': 'Organization', name: 'Partido Democrático Trabalhista' },
  knowsAbout: ['Gestão pública', 'Direito', 'Contabilidade', 'Administração municipal'],
  sameAs: ['https://www.instagram.com/drmarcosadrianoo/', 'https://www.facebook.com/dr.marcos70/'],
  ...(siteUrl ? { url: siteUrl } : {}),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {gtmId && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>
            <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>
          </>
        )}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
          </>
        )}
        {fbPixelId && (
          <>
            <Script id="fb-pixel" strategy="lazyOnload">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/pt_BR/fbevents.js');fbq('init','${fbPixelId}');fbq('track','PageView');`}</Script>
            <noscript><img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`} alt="" /></noscript>
          </>
        )}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
