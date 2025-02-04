import icon from '~/assets/images/ingredients/cooked-eel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedEel extends IngredientBase {
  protected _name = '熟鳗鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 1
}
