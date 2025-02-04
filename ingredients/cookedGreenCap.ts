import icon from '~/assets/images/ingredients/cooked-green-cap.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedGreenCap extends IngredientBase {
  protected _name = '熟绿蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
