import icon from '~/assets/images/ingredients/cactus-flower.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CactusFlower extends IngredientBase {
  protected _name = '仙人掌花'
  protected _image = icon

  protected override _vegetable = 0.5
}
