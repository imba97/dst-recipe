import icon from '~/assets/images/ingredients/fallounder.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Fallounder extends IngredientBase {
  protected _name = '落叶比目鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
