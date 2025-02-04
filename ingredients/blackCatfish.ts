import icon from '~/assets/images/ingredients/black-catfish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BlackCatfish extends IngredientBase {
  protected _name = '黑鲶鱼'
  protected _image = icon

  protected override _meat = 1
  protected override _fish = 1
}
