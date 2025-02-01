/* eslint-disable perfectionist/sort-imports */

// 角色基本属性
import healthMeter from '~/assets/images/health-meter.png'
import hungerMeter from '~/assets/images/hunger-meter.png'
import sanityMeter from '~/assets/images/sanity-meter.png'

// 物品栏背景
import inventorySlotBackground from '~/assets/images/inventory-slot-background.png'

export function useCommonImage() {
  return {
    inventorySlotBackground,
    healthMeter,
    hungerMeter,
    sanityMeter
  }
}
