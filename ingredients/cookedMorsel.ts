import icon from '~/assets/images/ingredients/cooked-morsel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedMorsel extends IngredientBase {
  protected _name = '熟小肉'
  protected _image = icon

  protected override _meat = 0.5
}
