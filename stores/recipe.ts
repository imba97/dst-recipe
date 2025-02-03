export const useRecipe = defineStore('recipe', {
  state: () => ({
    current: null as unknown as FoodBaseConstructor
  }) as {
    current: FoodBaseConstructor
  }
})
