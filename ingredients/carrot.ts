import icon from '~/assets/images/ingredients/carrot.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Carrot extends IngredientBase {
  protected _name = '胡萝卜'
  protected _image = icon

  protected override _vegetable = 1
}
