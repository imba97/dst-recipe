import icon from '~/assets/images/ingredients/wobster-build.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class WobsterBuild extends IngredientBase {
  protected _name = '龙虾'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
