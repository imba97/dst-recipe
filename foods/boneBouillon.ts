import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/bone-bouillon.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import BoneShards from '~/ingredients/boneShards'
import Onion from '~/ingredients/onion'
import RoastedOnion from '~/ingredients/roastedOnion'

export default class BoneBouillon extends FoodBase {
  _name = '骨头汤'
  _health = 32
  _hunger = 150
  _sanity = 5
  _rot = 10
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        BoneShards
      ],
      condition: {
        eq: 2
      }
    },
    {
      ingredients: [
        Onion,
        RoastedOnion
      ],
      condition: {
        eq: 2
      }
    }
  ]

  protected override _notEdible: ComparisonOperator = {
    gt: 0,
    lt: 3
  }

  protected override _warlyOnly = true
}
