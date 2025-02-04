import icon from '~/assets/images/ingredients/glow-berry.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class GlowBerry extends IngredientBase {
  protected _name = '发光浆果'
  protected _image = icon

  protected override _fruit = 1
}
