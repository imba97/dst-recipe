import type { ComparisonOperator } from './comparisonOperator'
import type { IngredientTypeKey } from '~/enums/ingredientType'

export type ConditionResult = {
  [key in IngredientTypeKey]?: ComparisonOperator
}
