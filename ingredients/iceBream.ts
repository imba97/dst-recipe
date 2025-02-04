import icon from '~/assets/images/ingredients/ice-bream.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class IceBream extends IngredientBase {
  protected _name = '冰鲷鱼'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
