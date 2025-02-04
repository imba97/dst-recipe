import icon from '~/assets/images/ingredients/juicy-berries.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class JuicyBerries extends IngredientBase {
  protected _name = '多汁浆果'
  protected _image = icon

  protected override _fruit = 0.5
}
