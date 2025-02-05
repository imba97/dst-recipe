import icon from '~/assets/images/foods/wet-goop.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class WetGoop extends FoodBase {
  _name = '潮湿黏糊'
  _health = 0
  _hunger = 0
  _sanity = 0
  _rot = 6
  _cooking = 5
  _priority = -10
  _image = icon
}
