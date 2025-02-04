import icon from '~/assets/images/ingredients/naked-nostrils.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class NakedNostrils extends IngredientBase {
  protected _name = '裸露鼻孔'
  protected _image = icon

  protected override _meat = 0.5
}
