<template>
  <div fccc gap-8>
    <div v-show="foodData.ingredientsCondition.length > 0" fccc gap-4>
      <div>
        必须食材
      </div>
      <div v-for="(ingredientCondition, index) in requireIngredients" :key="index" fcc gap-4>
        <div v-for="(ingredient, ingredientIndex) in ingredientCondition.ingredients" :key="ingredientIndex" fcc gap-2>
          <div size-8>
            <InventorySlot :icon="ingredient.image" />
          </div>
          <div text="3.5 primary">
            {{ ingredient.name }}
          </div>
          <div v-if="ingredientIndex !== ingredientCondition.ingredients.length - 1" text="3 gray">
            OR
          </div>
          <div v-if="ingredientIndex === ingredientCondition.ingredients.length - 1" text="3.5 primary">
            {{ parseComparisonOperator(ingredientCondition.condition) }}
          </div>
        </div>
      </div>
    </div>
    <div fccc gap-4>
      <div>
        条件
      </div>

      <div>
        <div>{{ foodData.condition }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const repiceStore = useRecipe()

const foodData = computed(() => useFood(repiceStore.current))

const requireIngredients = computed(() => {
  return foodData.value.ingredientsCondition.map((ingredientCondition) => {
    const ingredients = ingredientCondition.ingredients.map((ingredient) => {
      return useIngredientsBase(ingredient)
    })

    return {
      ingredients,
      condition: ingredientCondition.condition
    }
  })
})
</script>
