import icon from '~/assets/images/ingredients/pepper.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Pepper extends IngredientBase {
  protected _name = '辣椒'
  protected _image = icon

  protected override _vegetable = 1
}
