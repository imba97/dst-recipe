import icon from '~/assets/images/ingredients/toma-root.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class TomaRoot extends IngredientBase {
  protected _name = '番茄'
  protected _image = icon

  protected override _vegetable = 1
}
