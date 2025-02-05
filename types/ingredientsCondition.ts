import type { ComparisonOperator } from './comparisonOperator'

export interface IngredientsCondition {
  ingredients: IngredientConstructor[]
  condition: ComparisonOperator
}
