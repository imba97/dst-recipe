import icon from '~/assets/images/ingredients/barnacles.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Barnacles extends IngredientBase {
  protected _name = '藤壶'
  protected _image = icon

  protected override _meat = 0.25
  protected override _fish = 0.25
}
