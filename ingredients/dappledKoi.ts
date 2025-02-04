import icon from '~/assets/images/ingredients/dappled-koi.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class DappledKoi extends IngredientBase {
  protected _name = '花锦鲤'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
