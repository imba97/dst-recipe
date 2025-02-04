import icon from '~/assets/images/ingredients/roasted-potato.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedPotato extends IngredientBase {
  protected _name = '烤土豆'
  protected _image = icon

  protected override _vegetable = 1
}
