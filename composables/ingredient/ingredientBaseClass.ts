export abstract class IngredientBase extends InstanceClass {
  protected abstract _name: string

  /**
   * 肉度
   */
  protected _meat?: number

  /**
   * 怪物度
   */
  protected _monster?: number

  /**
   * 鱼度
   */
  protected _fish?: number

  /**
   * 水果度
   */
  protected _fruit?: number

  /**
   * 蔬菜度
   */
  protected _vegetable?: number

  /**
   * 蛋度
   */
  protected _egg?: number

  /**
   * 甜味剂度
   */
  protected _sweetener?: number

  /**
   * 乳制品度
   */
  protected _dairy?: number

  /**
   * 冰度
   */
  protected _ice?: number

  /**
   * 不可食用度
   */
  protected _notEdible?: number

  /**
   * 魔法度
   */
  protected _magic?: number

  /**
   * 油脂度
   */
  protected _grease?: number

  /**
   * 种子度
   */
  protected _seed?: number

  /**
   * 装饰度
   */
  protected _decorate?: number

  /**
   * 图片
   */
  protected abstract _image: string

  /**
   * 名称
   */
  get name() {
    return this._name
  }

  /**
   * 肉度
   */
  get meat() {
    return this._meat || 0
  }

  /**
   * 怪物度
   */
  get monster() {
    return this._monster || 0
  }

  /**
   * 鱼度
   */
  get fish() {
    return this._fish || 0
  }

  /**
   * 水果度
   */
  get fruit() {
    return this._fruit || 0
  }

  /**
   * 蔬菜度
   */
  get vegetable() {
    return this._vegetable || 0
  }

  /**
   * 蛋度
   */
  get egg() {
    return this._egg || 0
  }

  /**
   * 甜味剂度
   */
  get sweetener() {
    return this._sweetener || 0
  }

  /**
   * 乳制品度
   */
  get dairy() {
    return this._dairy || 0
  }

  /**
   * 冰度
   */
  get ice() {
    return this._ice || 0
  }

  /**
   * 不可食用度
   */
  get notEdible() {
    return this._notEdible || 0
  }

  /**
   * 魔法度
   */
  get magic() {
    return this._magic || 0
  }

  /**
   * 种子度
   */
  get seed() {
    return this._seed || 0
  }

  /**
   * 装饰度
   */
  get decorate() {
    return this._decorate || 0
  }

  /**
   * 油脂度
   */
  get grease() {
    return this._grease || 0
  }

  /**
   * 图片
   */
  get image() {
    return this._image
  }
}

export function useIngredientsBase(FoodBaseClass: new () => IngredientBase) {
  return useInstance(FoodBaseClass)
}
