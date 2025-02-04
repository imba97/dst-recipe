import icon from '~/assets/images/ingredients/onion.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Onion extends IngredientBase {
  protected _name = '洋葱'
  protected _image = icon

  protected override _vegetable = 1
}
