type MouseArtEffectType =
  | 'circle_enlarge'
  | 'circle_random_explosive'
  | 'circle_cross_explosive'
  | 'love_rise'
  | 'circle_rotate_yin_yang'
  | 'text_hidden'

interface MouseArtOptionsType {
  eventType?: 'mousedown' | 'mouseover'
  effectType?: MouseArtEffectType | null
  duration?: number
  bindEle?: Document | HTMLElement
  bgImg?: string
  text?: string
}

interface MouseArtController {
  destroy: () => void
}

declare function mouseArt(options?: MouseArtOptionsType): MouseArtController

export default mouseArt
export type { MouseArtEffectType, MouseArtOptionsType, MouseArtController }
