import icon from '~/assets/images/ingredients/smolt-fry.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class SmoltFry extends IngredientBase {
  protected _name = '三文鱼苗'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
