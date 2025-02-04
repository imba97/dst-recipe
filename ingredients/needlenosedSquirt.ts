import icon from '~/assets/images/ingredients/needlenosed-squirt.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class NeedlenosedSquirt extends IngredientBase {
  protected _name = '针鼻喷墨鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
