import icon from '~/assets/images/ingredients/green-cap.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class GreenCap extends IngredientBase {
  protected _name = '采摘的绿蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
