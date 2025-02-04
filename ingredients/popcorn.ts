import icon from '~/assets/images/ingredients/popcorn.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Popcorn extends IngredientBase {
  protected _name = '爆米花'
  protected _image = icon

  protected override _vegetable = 1
}
