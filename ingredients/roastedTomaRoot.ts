import icon from '~/assets/images/ingredients/roasted-toma-root.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedTomaRoot extends IngredientBase {
  protected _name = '烤番茄'
  protected _image = icon

  protected override _vegetable = 1
}
