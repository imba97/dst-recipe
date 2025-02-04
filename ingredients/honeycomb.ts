import icon from '~/assets/images/ingredients/honeycomb.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Honeycomb extends IngredientBase {
  protected _name = '蜜脾'
  protected _image = icon

  protected override _sweetener = 1
}
