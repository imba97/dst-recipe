import icon from '~/assets/images/ingredients/roasted-berries.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedBerries extends IngredientBase {
  protected _name = '烤浆果'
  protected _image = icon

  protected override _fruit = 0.5
}
