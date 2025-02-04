import icon from '~/assets/images/ingredients/roast-garlic.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastGarlic extends IngredientBase {
  protected _name = '烤大蒜'
  protected _image = icon

  protected override _vegetable = 1
}
