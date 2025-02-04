import icon from '~/assets/images/ingredients/asparagus.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Asparagus extends IngredientBase {
  protected _name = '芦笋'
  protected _image = icon

  protected override _vegetable = 1
}
