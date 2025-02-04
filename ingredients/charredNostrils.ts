import icon from '~/assets/images/ingredients/charred-nostrils.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CharredNostrils extends IngredientBase {
  protected _name = '炭烤鼻孔'
  protected _image = icon

  protected override _meat = 0.5
}
