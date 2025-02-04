import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { ConditionResult } from '~/types/condition'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import { IngredientType } from '~/enums/ingredientType'

export abstract class FoodBase extends InstanceClass {
  private _pinyin: string = ''
  private _pinyinInitials: string = ''

  protected abstract _name: string
  protected abstract _health: number
  protected abstract _hunger: number
  protected abstract _sanity: number
  protected abstract _rot: number
  protected abstract _cooking: number
  protected abstract _priority: number
  protected abstract _image: string

  /**
   * 所需食材
   */
  protected _ingredientsCondition: IngredientsCondition[] = []

  /**
   * 所需肉度
   */
  protected _meat?: ComparisonOperator

  /**
   * 所需怪物度
   */
  protected _monster?: ComparisonOperator

  /**
   * 所需鱼度
   */
  protected _fish?: ComparisonOperator

  /**
   * 所需水果度
   */
  protected _fruit?: ComparisonOperator

  /**
   * 所需蔬菜度
   */
  protected _vegetable?: ComparisonOperator

  /**
   * 所需蛋度
   */
  protected _egg?: ComparisonOperator

  /**
   * 所需甜味剂度
   */
  protected _sweetener?: ComparisonOperator

  /**
   * 所需乳制品度
   */
  protected _dairy?: ComparisonOperator

  /**
   * 所需冰度
   */
  protected _ice?: ComparisonOperator

  /**
   * 所需不可食用度
   */
  protected _notEdible?: ComparisonOperator

  /**
   * 所需魔法度
   */
  protected _magic?: ComparisonOperator

  /**
   * 所需油脂度
   */
  protected _grease?: ComparisonOperator

  /**
   * 所需种子度
   */
  protected _seed?: ComparisonOperator

  /**
   * 所需装饰度
   */
  protected _decorate?: ComparisonOperator

  get ingredientsCondition() {
    return this._ingredientsCondition
  }

  set pinyin(value: { name: string, initials: string }) {
    this._pinyin = value.name
    this._pinyinInitials = value.initials
  }

  get pinyin() {
    return {
      name: this._pinyin,
      initials: this._pinyinInitials
    }
  }

  get name() {
    return this._name
  }

  get health() {
    return this.toSignedString(this._health)
  }

  get hunger() {
    return this.toSignedString(this._hunger)
  }

  get sanity() {
    return this.toSignedString(this._sanity)
  }

  get rot() {
    return this._rot
  }

  get cooking() {
    return this._cooking
  }

  get priority() {
    return this._priority
  }

  get image() {
    return this._image
  }

  get condition() {
    const result: ConditionResult = {}

    IngredientType.forEach((key) => {
      if (this[`_${key}`]) {
        result[key] = this[`_${key}`] as ComparisonOperator
      }
    })

    return result
  }

  private toSignedString(num: number) {
    return num >= 0 ? `+${num}` : `${num}`
  }
}

export type FoodBaseConstructor = new () => FoodBase

export function useFood(FoodBaseClass: FoodBaseConstructor) {
  return useInstance(FoodBaseClass)
}
