import type { ComparisonOperator } from './comparisonOperator'
import type { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export interface IngredientsConditionItem {
  ingredients: IngredientConstructor[]
  condition: ComparisonOperator
}

export interface IngredientsConditionInstance {
  ingredients: IngredientBase[]
  condition: ComparisonOperator
}

export type IngredientsCondition = (IngredientsConditionItem | IngredientsConditionItem[])[]
