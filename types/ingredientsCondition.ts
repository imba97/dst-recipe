import type { ComparisonOperator } from './comparisonOperator'
import type { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export interface IngredientsCondition {
  ingredients: (new () => IngredientBase)[]
  condition: ComparisonOperator
}
