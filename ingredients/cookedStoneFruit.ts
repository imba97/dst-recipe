import icon from '~/assets/images/ingredients/cooked-stone-fruit.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedStoneFruit extends IngredientBase {
  protected _name = '熟石果'
  protected _image = icon

  protected override _vegetable = 1
}
