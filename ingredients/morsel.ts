import icon from '~/assets/images/ingredients/morsel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Morsel extends IngredientBase {
  protected _name = '小肉'
  protected _image = icon

  protected override _meat = 0.5
}
