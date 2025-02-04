import icon from '~/assets/images/ingredients/fig.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Fig extends IngredientBase {
  protected _name = '无花果'
  protected _image = icon

  protected override _fruit = 0.5
}
