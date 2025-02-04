import icon from '~/assets/images/ingredients/pumpkin.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Pumpkin extends IngredientBase {
  protected _name = '南瓜'
  protected _image = icon

  protected override _vegetable = 1
}
