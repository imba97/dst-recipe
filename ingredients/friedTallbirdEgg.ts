import icon from '~/assets/images/ingredients/fried-tallbird-egg.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class FriedTallbirdEgg extends IngredientBase {
  protected _name = '煎高脚鸟蛋'
  protected _image = icon

  protected override _egg = 4
}
