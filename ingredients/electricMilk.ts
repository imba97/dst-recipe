import icon from '~/assets/images/ingredients/electric-milk.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class ElectricMilk extends IngredientBase {
  protected _name = '带电的羊奶'
  protected _image = icon

  protected override _dairy = 1
}
