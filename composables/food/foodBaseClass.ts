export abstract class FoodBase extends InstanceClass {
  protected abstract _name: string
  protected abstract _health: number
  protected abstract _hunger: number
  protected abstract _sanity: number
  protected abstract _rot: number
  protected abstract _cooking: number
  protected abstract _priority: number
  protected abstract _image: string

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
  return useInstance(FoodBaseClass) as FoodBase
}
