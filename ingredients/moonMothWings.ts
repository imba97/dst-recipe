import icon from '~/assets/images/ingredients/moon-moth-wings.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class MoonMothWings extends IngredientBase {
  protected _name = '月蛾翅膀'
  protected _image = icon

  protected override _decorate = 1
}
