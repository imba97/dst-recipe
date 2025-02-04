import icon from '~/assets/images/ingredients/live-eel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class LiveEel extends IngredientBase {
  protected _name = '活鳗鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 1
}
