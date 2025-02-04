import icon from '~/assets/images/ingredients/cooked-blue-cap.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedBlueCap extends IngredientBase {
  protected _name = '熟蓝蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
