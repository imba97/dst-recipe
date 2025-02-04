import icon from '~/assets/images/ingredients/lichen.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Lichen extends IngredientBase {
  protected _name = '苔藓'
  protected _image = icon

  protected override _vegetable = 1
}
