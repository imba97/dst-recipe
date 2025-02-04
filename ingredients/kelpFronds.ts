import icon from '~/assets/images/ingredients/kelp-fronds.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class KelpFronds extends IngredientBase {
  protected _name = '海带叶'
  protected _image = icon

  protected override _vegetable = 0.5
}
