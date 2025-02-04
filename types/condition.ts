import type { ComparisonOperator } from './comparisonOperator'
import type { IngredientType } from '~/enums/ingredientType'

export type ConditionResult = {
  [key in typeof IngredientType[number]]?: ComparisonOperator
}
