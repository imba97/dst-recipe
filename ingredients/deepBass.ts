import icon from '~/assets/images/ingredients/deep-bass.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class DeepBass extends IngredientBase {
  protected _name = '斑鱼'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
