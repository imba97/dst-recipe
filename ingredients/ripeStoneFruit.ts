import icon from '~/assets/images/ingredients/ripe-stone-fruit.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RipeStoneFruit extends IngredientBase {
  protected _name = '成熟石果'
  protected _image = icon

  protected override _vegetable = 1
}
