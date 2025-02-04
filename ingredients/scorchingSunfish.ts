import icon from '~/assets/images/ingredients/scorching-sunfish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class ScorchingSunfish extends IngredientBase {
  protected _name = '炽热太阳鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
