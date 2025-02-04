import icon from '~/assets/images/ingredients/red-cap.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RedCap extends IngredientBase {
  protected _name = '采摘的红蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
