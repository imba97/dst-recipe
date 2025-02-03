import icon from '~/assets/images/ingredients/butterfly-wings.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class ButterflyWings extends IngredientBase {
  protected _name = '蝴蝶翅膀'
  protected _image = icon

  protected override _decorate = 1
}
