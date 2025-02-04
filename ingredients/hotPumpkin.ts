import icon from '~/assets/images/ingredients/hot-pumpkin.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class HotPumpkin extends IngredientBase {
  protected _name = '烤南瓜'
  protected _image = icon

  protected override _vegetable = 1
}
