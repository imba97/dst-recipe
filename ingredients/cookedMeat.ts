import icon from '~/assets/images/ingredients/cooked-meat.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedMeat extends IngredientBase {
  protected _name = '熟肉'
  protected _image = icon

  protected override _meat = 1
}
