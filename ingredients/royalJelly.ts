import icon from '~/assets/images/ingredients/royal-jelly.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoyalJelly extends IngredientBase {
  protected _name = '蜂王浆'
  protected _image = icon

  protected override _sweetener = 3
}
