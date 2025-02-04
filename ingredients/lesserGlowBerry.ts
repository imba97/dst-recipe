import icon from '~/assets/images/ingredients/lesser-glow-berry.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class LesserGlowBerry extends IngredientBase {
  protected _name = '小发光浆果'
  protected _image = icon

  protected override _fruit = 0.5
}
