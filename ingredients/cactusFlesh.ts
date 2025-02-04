import icon from '~/assets/images/ingredients/cactus-flesh.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CactusFlesh extends IngredientBase {
  protected _name = '仙人掌肉'
  protected _image = icon

  protected override _vegetable = 1
}
