import icon from '~/assets/images/ingredients/durian.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Durian extends IngredientBase {
  protected _name = '榴莲'
  protected _image = icon

  protected override _monster = 1
  protected override _fruit = 1
}
