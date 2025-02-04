import icon from '~/assets/images/ingredients/moon-shroom.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class MoonShroom extends IngredientBase {
  protected _name = '月亮蘑菇'
  protected _image = icon

  protected override _vegetable = 0.5
}
