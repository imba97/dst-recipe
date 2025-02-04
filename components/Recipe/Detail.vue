<template>
  <div fccc gap-8 py-4>
    <div v-show="foodData.ingredientsCondition.length > 0" w-full fccc gap-4>
      <div>
        必须食材
      </div>
      <div v-for="(ingredientCondition, index) in requireIngredients" :key="index" w-full fbc gap-4 px-4>
        <div fyc flex-1 flex-wrap gap-4>
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
          </div>
        </div>
        <div text="4 primary">
          {{ parseComparisonOperator(ingredientCondition.condition) }}
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
