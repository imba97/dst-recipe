import icon from '~/assets/images/ingredients/roasted-onion.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedOnion extends IngredientBase {
  protected _name = '烤洋葱'
  protected _image = icon

  protected override _vegetable = 1
}
