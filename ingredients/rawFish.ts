import icon from '~/assets/images/ingredients/raw-fish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RawFish extends IngredientBase {
  protected _name = '生鱼肉'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
