import icon from '~/assets/images/ingredients/roasted-asparagus.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedAsparagus extends IngredientBase {
  protected _name = '烤芦笋'
  protected _image = icon

  protected override _vegetable = 1
}
