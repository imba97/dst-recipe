import icon from '~/assets/images/ingredients/bone-shards.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class BoneShards extends IngredientBase {
  protected _name = '骨头碎片'
  protected _image = icon

  protected override _notEdible = 1
}
