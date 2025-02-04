import icon from '~/assets/images/ingredients/potato.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Potato extends IngredientBase {
  protected _name = '土豆'
  protected _image = icon

  protected override _vegetable = 1
}
