<template>
  <div fccc gap-8 py-4>
    <div v-show="requireIngredients.arbitrary.length > 0 || requireIngredients.fixed.length > 0" w-full fccc gap-4>
      <div>
        必须食材
      </div>
      <div v-for="(ingredientCondition, index) in requireIngredients.fixed" :key="index" w-full fbc gap-4 px-4>
        <div fyc flex-1 flex-wrap gap-4>
          <div
            v-for="(ingredient, ingredientIndex) in ingredientCondition.ingredients" :key="ingredientIndex" fcc
            gap-2
          >
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
      <div v-for="(ingredientConditions, index) in requireIngredients.arbitrary" :key="index" w-full fc flex-col gap-4 px-4>
        <div v-for="(ingredientCondition, ingredientConditionIndex) in ingredientConditions" :key="ingredientConditionIndex" pr fbc gap-4>
          <div fyc flex-1 flex-wrap gap-4>
            <div
              v-for="(ingredient, ingredientIndex) in ingredientCondition.ingredients" :key="ingredientIndex" fcc
              gap-2
            >
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
          <div v-show="ingredientConditionIndex < ingredientConditions.length - 1" pa bottom="-4.5" left-12 text="3 gray">
            OR
          </div>
        </div>
      </div>
    </div>
    <div v-show="allConditions.parsedConditions.length > 0" w-full fccc gap-4 px-4>
      <div>
        条件
      </div>

      <div w-full>
        <div v-for="item in allConditions.parsedConditions" :key="item.type">
          <IngredientProperty :type="item.type" :conditions="item.conditions" />
        </div>

        <div v-for="(mergedCondition, index) in allConditions.mergedConditions" :key="index">
          <div v-for="(item, itemIndex) in mergedCondition" :key="itemIndex">
            <IngredientProperty :type="item.type" :conditions="item.conditions" />
            <div v-if="itemIndex !== mergedCondition.length - 1" text="3 gray">
              OR
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="foodData.warlyOnly" w-full fbc gap-4 px-4>
      <div>
        <img :src="portableCrockPot" size-8>
      </div>
      <div text="4 primary">
        仅限沃利制作
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IngredientsConditionInstance } from '~/types/ingredientsCondition'

const repiceStore = useRecipe()
const { portableCrockPot } = useSystemImage()

const foodData = computed(() => repiceStore.current!)

const mergeKeys = computed(() => _flatten(foodData.value.merge))

const requireIngredients = computed(() => {
  const ingredientsCondition: {
    arbitrary: IngredientsConditionInstance[][]
    fixed: IngredientsConditionInstance[]
  } = {
    arbitrary: [],
    fixed: []
  }

  _forEach(foodData.value.ingredientsCondition, (ingredientCondition) => {
    if (_isArray(ingredientCondition)) {
      ingredientsCondition.arbitrary.push(
        _map(ingredientCondition, (ingredientConditionItem) => {
          return {
            ingredients: _map(ingredientConditionItem.ingredients, item => useIngredientsBase(item)),
            condition: ingredientConditionItem.condition
          }
        })
      )
    }
    else {
      ingredientsCondition.fixed.push({
        ingredients: _map(ingredientCondition.ingredients, item => useIngredientsBase(item)),
        condition: ingredientCondition.condition
      })
    }
  })

  return ingredientsCondition
})

const allConditions = computed(() => {
  const parsedConditions = parseCondictions(foodData.value.condition)

  const removedConditions = _remove(parsedConditions, (item) => {
    return _includes(mergeKeys.value, item.type)
  })

  const mergedConditions = _map(foodData.value.merge, (mergedKey) => {
    return _map(mergedKey, (key) => {
      return _find(removedConditions, { type: key })!
    })
  })

  return {
    parsedConditions,
    mergedConditions
  }
})
</script>
