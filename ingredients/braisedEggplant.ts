import icon from '~/assets/images/ingredients/braised-eggplant.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BraisedEggplant extends IngredientBase {
  protected _name = '烤茄子'
  protected _image = icon

  protected override _vegetable = 1
}
