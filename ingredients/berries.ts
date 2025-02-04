import icon from '~/assets/images/ingredients/berries.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Berries extends IngredientBase {
  protected _name = '浆果'
  protected _image = icon

  protected override _fruit = 0.5
}
