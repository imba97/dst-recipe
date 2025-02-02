/* eslint-disable perfectionist/sort-imports */

// 角色基本属性
import healthMeter from '~/assets/images/status/health-meter.png'
import hungerMeter from '~/assets/images/status/hunger-meter.png'
import sanityMeter from '~/assets/images/status/sanity-meter.png'

// 烹饪相关
import rot from '~/assets/images/status/rot.png'
import crockPot from '~/assets/images/status/crock-pot.png'

// 物品栏背景
import inventorySlotBackground from '~/assets/images/status/inventory-slot-background.png'

export function useSystemImage() {
  return {
    healthMeter,
    hungerMeter,
    sanityMeter,

    rot,
    crockPot,

    inventorySlotBackground
  }
}
