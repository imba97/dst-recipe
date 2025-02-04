import icon from '~/assets/images/ingredients/cooked-cactus-flesh.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedCactusFlesh extends IngredientBase {
  protected _name = '熟仙人掌肉'
  protected _image = icon

  protected override _vegetable = 1
}
