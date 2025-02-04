import icon from '~/assets/images/ingredients/fried-drumstick.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class FriedDrumstick extends IngredientBase {
  protected _name = '炸鸟腿'
  protected _image = icon

  protected override _meat = 0.5
}
