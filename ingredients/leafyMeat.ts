import icon from '~/assets/images/ingredients/leafy-meat.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class LeafyMeat extends IngredientBase {
  protected _name = '叶肉'
  protected _image = icon

  protected override _meat = 1
}
