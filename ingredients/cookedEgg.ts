import icon from '~/assets/images/ingredients/cooked-egg.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedEgg extends IngredientBase {
  protected _name = '熟鸟蛋'
  protected _image = icon

  protected override _egg = 1
}
