import icon from '~/assets/images/ingredients/dried-kelp-fronds.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class DriedKelpFronds extends IngredientBase {
  protected _name = '干海带叶'
  protected _image = icon

  protected override _vegetable = 0.5
}
