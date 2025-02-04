import icon from '~/assets/images/ingredients/roasted-juicy-berries.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedJuicyBerries extends IngredientBase {
  protected _name = '烤多汁浆果'
  protected _image = icon

  protected override _fruit = 0.5
}
