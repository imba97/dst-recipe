import icon from '~/assets/images/ingredients/cooked-fig.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedFig extends IngredientBase {
  protected _name = '熟无花果'
  protected _image = icon

  protected override _fruit = 0.5
}
