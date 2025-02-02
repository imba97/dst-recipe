const foodBaseCache = new Map<string, FoodBase>()

export abstract class FoodBase {
  protected abstract _name: string
  protected abstract _health: number
  protected abstract _hunger: number
  protected abstract _sanity: number
  protected abstract _rot: number
  protected abstract _cooking: number
  protected abstract _priority: number
  protected abstract _image: string

  constructor() {
    const className = this.constructor.name
    const existingInstance = foodBaseCache.get(className)
    if (existingInstance) {
      return existingInstance as this
    }
    foodBaseCache.set(className, this)
  }

  get name() {
    return this._name
  }

  get health() {
    return this.toSignedString(this._health)
  }

  get hunger() {
    return this.toSignedString(this._hunger)
  }

  get sanity() {
    return this.toSignedString(this._sanity)
  }

  get rot() {
    return this._rot
  }

  get cooking() {
    return this._cooking
  }

  get priority() {
    return this._priority
  }

  get image() {
    return this._image
  }

  private toSignedString(num: number) {
    return num >= 0 ? `+${num}` : `${num}`
  }
}

export function useFood(FoodBaseClass: new () => FoodBase) {
  if (foodBaseCache.has(FoodBaseClass.name)) {
    return foodBaseCache.get(FoodBaseClass.name)!
  }

  return new FoodBaseClass()
}
