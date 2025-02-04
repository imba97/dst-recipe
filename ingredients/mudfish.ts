import icon from '~/assets/images/ingredients/mudfish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Mudfish extends IngredientBase {
  protected _name = '泥鱼'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
