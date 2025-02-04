import icon from '~/assets/images/ingredients/spittlefish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Spittlefish extends IngredientBase {
  protected _name = '口水鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
