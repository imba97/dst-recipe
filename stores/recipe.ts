import type { FoodBase } from '~/composables/food/foodBaseClass'
import { defineStore } from 'pinia'

export const useRecipe = defineStore('recipe', {
  state: () => ({
    current: null
  }) as {
    current: FoodBase | null
  }
})
