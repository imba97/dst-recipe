import type { IngredientTypeKey } from '~/enums/ingredientType'
import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { ConditionResult } from '~/types/condition'

export default function parseCondictions(conditionResult: ConditionResult) {
  return Object.entries(conditionResult).map(([type, conditions]) => {
    return {
      type,
      conditions
    }
  }) as { type: IngredientTypeKey, conditions: ComparisonOperator }[]
}
