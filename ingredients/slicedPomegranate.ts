import icon from '~/assets/images/ingredients/sliced-pomegranate.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class SlicedPomegranate extends IngredientBase {
  protected _name = '切片熟石榴'
  protected _image = icon

  protected override _fruit = 1
}
