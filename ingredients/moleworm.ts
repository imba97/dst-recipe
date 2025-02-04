import icon from '~/assets/images/ingredients/moleworm.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Moleworm extends IngredientBase {
  protected _name = '鼹鼠'
  protected _image = icon

  protected override _meat = 0.5
}
