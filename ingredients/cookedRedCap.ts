import icon from '~/assets/images/ingredients/cooked-red-cap.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedRedCap extends IngredientBase {
  protected _name = '熟红蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
