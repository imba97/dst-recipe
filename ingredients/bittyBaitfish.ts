import icon from '~/assets/images/ingredients/bitty-baitfish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BittyBaitfish extends IngredientBase {
  protected _name = '小饵鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
