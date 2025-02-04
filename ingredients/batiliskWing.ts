import icon from '~/assets/images/ingredients/batilisk-wing.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BatiliskWing extends IngredientBase {
  protected _name = '洞穴蝙蝠翅膀'
  protected _image = icon

  protected override _meat = 0.5
}
