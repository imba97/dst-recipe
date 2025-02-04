import icon from '~/assets/images/ingredients/volt-goat-horn.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class VoltGoatHorn extends IngredientBase {
  protected _name = '伏特羊角'
  protected _image = icon

  protected override _notEdible = 1
}
