import icon from '~/assets/images/ingredients/dandy-lionfish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class DandyLionfish extends IngredientBase {
  protected _name = '浮夸狮子鱼'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
