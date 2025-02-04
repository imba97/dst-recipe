import icon from '~/assets/images/ingredients/frog-legs.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class FrogLegs extends IngredientBase {
  protected _name = '蛙腿'
  protected _image = icon

  protected override _meat = 0.5
}
