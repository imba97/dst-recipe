import icon from '~/assets/images/ingredients/egg.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Egg extends IngredientBase {
  protected _name = '鸟蛋'
  protected _image = icon

  protected override _egg = 1
}
