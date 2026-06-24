import './css/index.less'
import { setMouseCoordinate, setArtOption } from '@/redux/getSet.ts'
import effects from './mouseClickEffect/circle.ts'
import type { effectsTypes } from './mouseClickEffect/circle.ts'
import 'animate.css'

import type { MouseArtController, MouseArtOptionsType } from './types'
import { batchUpdateEleStyleVariable } from './config/cssConfig.ts'
import { getImageUrl } from './utils/tools.ts'

/**
 * @param options
 */
function mouseArt(options: MouseArtOptionsType = {}): MouseArtController {
  if (typeof document === 'undefined') {
    return { destroy: () => {} }
  }

  const { bindEle = document, eventType = 'mousedown', effectType, duration = 0.7, bgImg } = options

  setArtOption({
    ...options,
    bgImg: bgImg && getImageUrl(bgImg),
    bindEle: undefined // 是个元素，存储在状态中没有意义。
  })

  batchUpdateEleStyleVariable({ '--duration': `${duration}s` })

  if (effectType === null) {
    return { destroy: () => {} }
  }

  const mouseEventCallback = (event: Event) => {
    event.stopPropagation()

    const x = (event as MouseEvent).x
    const y = (event as MouseEvent).y
    setMouseCoordinate(x, y)

    const effectTypeName = (effectType || 'circle_random_explosive') as keyof effectsTypes

    const createEffect = effects[effectTypeName] || effects.circle_random_explosive
    const createEle = createEffect()

    // 特效元素加载到 body 中
    document.body.appendChild(createEle)
    setTimeout(() => {
      createEle.remove()
    }, duration * 1000)
  }

  bindEle.addEventListener(eventType, mouseEventCallback)

  return {
    destroy: () => {
      bindEle.removeEventListener(eventType, mouseEventCallback)
    }
  }
}

export default mouseArt
