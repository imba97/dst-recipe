<template>
  <div inline-block fyc gap-2>
    <img :src="props.icon" :class="props.iconClass">
    <div text-5 font-thin>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  icon: string
  iconClass?: string
}>()
</script>
