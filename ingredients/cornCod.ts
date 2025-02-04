import icon from '~/assets/images/ingredients/corn-cod.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CornCod extends IngredientBase {
  protected _name = '玉米鳕鱼'
  protected _image = icon

  protected override _vegetable = 1
}
