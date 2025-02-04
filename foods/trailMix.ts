import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/trail-mix.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Berries from '~/ingredients/berries'
import Birchnut from '~/ingredients/birchnut'
import JuicyBerries from '~/ingredients/juicyBerries'
import RoastedBerries from '~/ingredients/roastedBerries'
import RoastedBirchnut from '~/ingredients/roastedBirchnut'
import RoastedJuicyBerries from '~/ingredients/roastedJuicyBerries'

export default class TrailMix extends FoodBase {
  _name = '什锦干果'
  _health = 30
  _hunger = 12.5
  _sanity = 5
  _rot = 15
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Birchnut,
        RoastedBirchnut
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Berries,
        RoastedBerries,
        JuicyBerries,
        RoastedJuicyBerries
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fruit: ComparisonOperator = {
    ge: 1
  }

  protected override _seed: ComparisonOperator = {
    ge: 1
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _vegetable: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _dairy: ComparisonOperator = {
    eq: 0
  }
}
