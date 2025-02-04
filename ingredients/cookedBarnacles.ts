import icon from '~/assets/images/ingredients/cooked-barnacles.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedBarnacles extends IngredientBase {
  protected _name = '熟藤壶'
  protected _image = icon

  protected override _meat = 0.25
  protected override _fish = 0.25
}
