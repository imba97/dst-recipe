import type { ComparisonOperator } from '~/types/comparisonOperator'

export default function parseComparisonOperator(condition: ComparisonOperator) {
  const result = []

  if (!_isUndefined(condition.eq)) {
    result.push(`等于 ${condition.eq}`)
  }

  if (!_isUndefined(condition.gt)) {
    result.push(`大于 ${condition.gt}`)
  }

  if (!_isUndefined(condition.ge)) {
    result.push(`大于等于 ${condition.ge}`)
  }

  if (!_isUndefined(condition.lt)) {
    result.push(`小于 ${condition.lt}`)
  }

  if (!_isUndefined(condition.le)) {
    result.push(`小于等于 ${condition.le}`)
  }

  return result.join('、')
}
