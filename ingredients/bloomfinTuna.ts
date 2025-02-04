import icon from '~/assets/images/ingredients/bloomfin-tuna.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BloomfinTuna extends IngredientBase {
  protected _name = '花朵金枪鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
