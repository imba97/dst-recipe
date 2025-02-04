import icon from '~/assets/images/ingredients/monster-meat.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class MonsterMeat extends IngredientBase {
  protected _name = '怪物肉'
  protected _image = icon

  protected override _meat = 1
  protected override _monster = 1
}
