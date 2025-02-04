import icon from '~/assets/images/ingredients/runty-guppy.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RuntyGuppy extends IngredientBase {
  protected _name = '小孔雀鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
