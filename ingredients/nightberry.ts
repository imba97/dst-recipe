import icon from '~/assets/images/ingredients/nightberry.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Nightberry extends IngredientBase {
  protected _name = '夜莓'
  protected _image = icon

  protected override _fruit = 1
}
