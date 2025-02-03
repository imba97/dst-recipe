<template>
  <div pt-4 space-y-4>
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
          <div>{{ foodData.rot }}</div>
          <div text="3.5 gray">
            d
          </div>
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

    <div fc items-start gap-8>
      <div fccc gap-4>
        <div>
          条件
        </div>

        <div>
          <div>{{ foodData.condition }}</div>
        </div>
      </div>
      <div v-show="foodData.ingredientsCondition.length > 0" fccc gap-4>
        <div>
          必须食材
        </div>
        <div v-for="(ingredientCondition, index) in requireIngredients" :key="index" fccc gap-4>
          <div v-for="(ingredient, index) in ingredientCondition.ingredients" :key="index" fcc gap-2>
            <div size-8>
              <InventorySlot :icon="ingredient.image" />
            </div>
            <div text="3.5 gray">
              {{ ingredient.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FoodBase } from '~/composables/food/foodBaseClass'

const props = defineProps<{
  food: new () => FoodBase
}>()

const foodData = useFood(props.food)

const requireIngredients = computed(() => {
  return foodData.ingredientsCondition.map((ingredientCondition) => {
    const ingredients = ingredientCondition.ingredients.map((ingredient) => {
      return useIngredientsBase(ingredient)
    })

    return {
      ingredients,
      condition: ingredientCondition.condition
    }
  })
})

const {
  healthMeter,
  hungerMeter,
  sanityMeter,
  rot,
  crockPot
} = useSystemImage()
</script>
