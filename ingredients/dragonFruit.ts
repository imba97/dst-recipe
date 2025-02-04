import icon from '~/assets/images/ingredients/dragon-fruit.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class DragonFruit extends IngredientBase {
  protected _name = '火龙果'
  protected _image = icon

  protected override _fruit = 1
}
