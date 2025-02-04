import icon from '~/assets/images/ingredients/monster-jerky.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class MonsterJerky extends IngredientBase {
  protected _name = '怪物肉干'
  protected _image = icon

  protected override _meat = 1
  protected override _monster = 1
}
