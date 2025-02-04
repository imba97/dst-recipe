import icon from '~/assets/images/ingredients/mandrake.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Mandrake extends IngredientBase {
  protected _name = '曼德拉草'
  protected _image = icon

  protected override _vegetable = 1
  protected override _magic = 1
}
