import icon from '~/assets/images/ingredients/cooked-moon-shroom.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedMoonShroom extends IngredientBase {
  protected _name = '熟月亮蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
