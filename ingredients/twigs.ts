import icon from '~/assets/images/ingredients/twigs.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Twigs extends IngredientBase {
  protected _name = '树枝'
  protected _image = icon

  protected override _notEdible = 1
}
