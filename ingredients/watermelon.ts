import icon from '~/assets/images/ingredients/watermelon.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Watermelon extends IngredientBase {
  protected _name = '西瓜'
  protected _image = icon

  protected override _fruit = 1
}
