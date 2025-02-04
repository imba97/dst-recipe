import icon from '~/assets/images/ingredients/small-jerky.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class SmallJerky extends IngredientBase {
  protected _name = '小肉干'
  protected _image = icon

  protected override _meat = 0.5
}
