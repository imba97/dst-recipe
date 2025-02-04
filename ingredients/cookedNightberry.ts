import icon from '~/assets/images/ingredients/cooked-nightberry.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedNightberry extends IngredientBase {
  protected _name = '熟夜莓'
  protected _image = icon

  protected override _fruit = 1
}
