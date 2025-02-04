import icon from '~/assets/images/ingredients/garlic.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Garlic extends IngredientBase {
  protected _name = '大蒜'
  protected _image = icon

  protected override _vegetable = 1
}
