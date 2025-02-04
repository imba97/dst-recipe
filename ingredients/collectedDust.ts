import icon from '~/assets/images/ingredients/collected-dust.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CollectedDust extends IngredientBase {
  protected _name = '尘土块'
  protected _image = icon

  protected override _decorate = 2
}
