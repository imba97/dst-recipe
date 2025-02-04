import icon from '~/assets/images/ingredients/cooked-monster-meat.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedMonsterMeat extends IngredientBase {
  protected _name = '熟怪物肉'
  protected _image = icon

  protected override _meat = 1
  protected override _monster = 1
}
