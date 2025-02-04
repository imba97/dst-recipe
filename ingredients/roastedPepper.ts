import icon from '~/assets/images/ingredients/roasted-pepper.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedPepper extends IngredientBase {
  protected _name = '烤辣椒'
  protected _image = icon

  protected override _vegetable = 1
}
