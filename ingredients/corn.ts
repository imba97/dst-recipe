import icon from '~/assets/images/ingredients/corn.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Corn extends IngredientBase {
  protected _name = '玉米'
  protected _image = icon

  protected override _vegetable = 1
}
