import icon from '~/assets/images/ingredients/golden-koi.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class GoldenKoi extends IngredientBase {
  protected _name = '金锦鲤'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
