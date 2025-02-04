import icon from '~/assets/images/ingredients/cooked-leafy-meat.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedLeafyMeat extends IngredientBase {
  protected _name = '熟叶肉'
  protected _image = icon

  protected override _meat = 1
}
