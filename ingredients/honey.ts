import icon from '~/assets/images/ingredients/honey.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Honey extends IngredientBase {
  protected _name = '蜂蜜'
  protected _image = icon

  protected override _sweetener = 1
}
