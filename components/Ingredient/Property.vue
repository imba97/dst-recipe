<template>
  <div fbc>
    <div>{{ ingredientName }}</div>
    <div text-primary>
      {{ comparisonOperator }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IngredientTypeKey } from '~/enums/ingredientType'
import type { ComparisonOperator } from '~/types/comparisonOperator'

const props = defineProps<{
  type: IngredientTypeKey
  conditions: ComparisonOperator
}>()

const ingredientName = computed(() => parseIngredientName(props.type))
const comparisonOperator = computed(() => parseComparisonOperator(props.conditions))
</script>
