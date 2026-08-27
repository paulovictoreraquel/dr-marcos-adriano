declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    dataLayer?: Array<Record<string, unknown>>
  }
}

type CampaignEvent =
  | 'cta_click'
  | 'support_submit'
  | 'support_success'
  | 'social_click'
  | 'gallery_interaction'

export function trackCampaignEvent(event: CampaignEvent, parameters: Record<string, string> = {}) {
  if (typeof window === 'undefined') return

  window.fbq?.('trackCustom', event, parameters)
  window.dataLayer?.push({ event, ...parameters })
}
