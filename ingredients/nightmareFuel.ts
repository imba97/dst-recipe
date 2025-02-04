import icon from '~/assets/images/ingredients/nightmare-fuel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class NightmareFuel extends IngredientBase {
  protected _name = '噩梦燃料'
  protected _image = icon

  protected override _notEdible = 1
  protected override _magic = 1
}
