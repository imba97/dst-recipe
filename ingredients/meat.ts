import icon from '~/assets/images/ingredients/meat.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Meat extends IngredientBase {
  protected _name = '肉'
  protected _image = icon

  protected override _meat = 1
}
