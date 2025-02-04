import icon from '~/assets/images/ingredients/berries.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedKelpFronds extends IngredientBase {
  protected _name = '熟海带叶'
  protected _image = icon

  protected override _vegetable = 0.5
}
