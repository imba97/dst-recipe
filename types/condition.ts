import type { ComparisonOperator } from './comparisonOperator'

export interface ConditionResult {
  meat?: ComparisonOperator
  monster?: ComparisonOperator
  fish?: ComparisonOperator
  fruit?: ComparisonOperator
  vegetable?: ComparisonOperator
  egg?: ComparisonOperator
  sweetener?: ComparisonOperator
  dairy?: ComparisonOperator
  ice?: ComparisonOperator
  notEdible?: ComparisonOperator
  magic?: ComparisonOperator
  grease?: ComparisonOperator
}
