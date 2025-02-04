import icon from '~/assets/images/ingredients/blue-cap.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BlueCap extends IngredientBase {
  protected _name = '采摘的蓝蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
