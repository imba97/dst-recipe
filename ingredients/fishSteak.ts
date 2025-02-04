import icon from '~/assets/images/ingredients/fish-steak.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class FishSteak extends IngredientBase {
  protected _name = '鱼排'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
