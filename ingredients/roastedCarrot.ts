import icon from '~/assets/images/ingredients/roasted-carrot.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedCarrot extends IngredientBase {
  protected _name = '烤胡萝卜'
  protected _image = icon

  protected override _vegetable = 1
}
