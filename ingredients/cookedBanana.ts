import icon from '~/assets/images/ingredients/cooked-banana.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedBanana extends IngredientBase {
  protected _name = '熟香蕉'
  protected _image = icon

  protected override _fruit = 1
}
