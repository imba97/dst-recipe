import icon from '~/assets/images/ingredients/ice.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Ice extends IngredientBase {
  protected _name = '冰'
  protected _image = icon

  protected override _ice = 1
}
