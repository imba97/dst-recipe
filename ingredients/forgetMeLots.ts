import icon from '~/assets/images/ingredients/forget-me-lots.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class ForgetMeLots extends IngredientBase {
  protected _name = '必忘我'
  protected _image = icon

  protected override _decorate = 1
}
