import icon from '~/assets/images/ingredients/prepared-dragon-fruit.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class PreparedDragonFruit extends IngredientBase {
  protected _name = '熟火龙果'
  protected _image = icon

  protected override _fruit = 1
}
