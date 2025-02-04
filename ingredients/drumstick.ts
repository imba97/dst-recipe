import icon from '~/assets/images/ingredients/drumstick.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Drumstick extends IngredientBase {
  protected _name = '鸟腿'
  protected _image = icon

  protected override _meat = 0.5
}
