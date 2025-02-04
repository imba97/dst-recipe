import icon from '~/assets/images/ingredients/popperfish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Popperfish extends IngredientBase {
  protected _name = '爆米花鱼'
  protected _image = icon

  protected override _vegetable = 1
}
