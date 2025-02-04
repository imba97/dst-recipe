import icon from '~/assets/images/ingredients/sweetish-fish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class SweetishFish extends IngredientBase {
  protected _name = '甜味鱼'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
