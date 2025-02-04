import icon from '~/assets/images/ingredients/butter.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Butter extends IngredientBase {
  protected _name = '黄油'
  protected _image = icon

  protected override _dairy = 1
  protected override _grease = 1
}
