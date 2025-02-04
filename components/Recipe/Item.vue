<template>
  <div p="t-4 b-8" space-y-4>
    <div fcc gap-4 pb-4>
      <div size-12>
        <InventorySlot :icon="foodData.image" />
      </div>
      <h1 font-extrabold tracking-wider text="6 center primary">
        {{ foodData.name }}
      </h1>
    </div>

    <div fcc gap-16>
      <StatusIconText :icon="healthMeter" icon-class="size-10">
        {{ foodData.health }}
      </StatusIconText>
      <StatusIconText :icon="hungerMeter" icon-class="size-10">
        {{ foodData.hunger }}
      </StatusIconText>
      <StatusIconText :icon="sanityMeter" icon-class="size-10">
        {{ foodData.sanity }}
      </StatusIconText>
    </div>

    <div fcc gap-16>
      <StatusIconText :icon="rot" icon-class="size-10">
        <div fyc gap-1>
          <template v-if="foodData.rot > 0">
            <div>{{ foodData.rot }}</div>
            <div text="3.5 gray">
              d
            </div>
          </template>
          <template v-else>
            <div>
              不会腐烂
            </div>
          </template>
        </div>
      </StatusIconText>
      <StatusIconText :icon="crockPot" icon-class="size-10">
        <div fyc gap-1>
          <div>{{ foodData.cooking }}</div>
          <div text="4 gray">
            s
          </div>
        </div>
      </StatusIconText>
    </div>
  </div>
</template>

<script lang="ts" setup>
const recipeStore = useRecipe()

const foodData = computed(() => recipeStore.current!)

const {
  healthMeter,
  hungerMeter,
  sanityMeter,
  rot,
  crockPot
} = useSystemImage()
</script>
