import icon from '~/assets/images/ingredients/cooked-frog-legs.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedFrogLegs extends IngredientBase {
  protected _name = '熟蛙腿'
  protected _image = icon

  protected override _meat = 0.5
}
