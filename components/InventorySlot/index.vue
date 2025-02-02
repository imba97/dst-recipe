<template>
  <div pr size-full>
    <img :src="inventorySlotBackground" pa inset-0 select-none>
    <div pa inset-0 size-full scale-80>
      <img :src="props.icon">
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  icon: string
}>()

const { inventorySlotBackground } = useSystemImage()
</script>
