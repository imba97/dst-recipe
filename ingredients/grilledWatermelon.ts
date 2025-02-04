import icon from '~/assets/images/ingredients/grilled-watermelon.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class GrilledWatermelon extends IngredientBase {
  protected _name = '烤西瓜'
  protected _image = icon

  protected override _fruit = 1
}
