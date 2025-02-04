import icon from '~/assets/images/ingredients/banana.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Banana extends IngredientBase {
  protected _name = '香蕉'
  protected _image = icon

  protected override _fruit = 1
}
