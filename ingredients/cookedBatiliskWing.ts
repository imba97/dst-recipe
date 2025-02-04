import icon from '~/assets/images/ingredients/cooked-batilisk-wing.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedBatiliskWing extends IngredientBase {
  protected _name = '熟蝙蝠翅膀'
  protected _image = icon

  protected override _meat = 0.5
}
