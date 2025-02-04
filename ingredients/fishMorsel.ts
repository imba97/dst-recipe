import icon from '~/assets/images/ingredients/fish-morsel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class FishMorsel extends IngredientBase {
  protected _name = '小鱼块'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
