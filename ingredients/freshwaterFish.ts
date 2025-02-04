import icon from '~/assets/images/ingredients/freshwater-fish.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class FreshwaterFish extends IngredientBase {
  protected _name = '淡水鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
