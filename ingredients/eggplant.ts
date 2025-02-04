import icon from '~/assets/images/ingredients/eggplant.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Eggplant extends IngredientBase {
  protected _name = '茄子'
  protected _image = icon

  protected override _vegetable = 1
}
