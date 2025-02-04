import icon from '~/assets/images/ingredients/birchnut.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Birchnut extends IngredientBase {
  protected _name = '桦栗果'
  protected _image = icon

  protected override _seed = 1
}
