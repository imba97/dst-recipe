import icon from '~/assets/images/ingredients/tallbird-egg.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class TallbirdEgg extends IngredientBase {
  protected _name = '高脚鸟蛋'
  protected _image = icon

  protected override _egg = 4
}
