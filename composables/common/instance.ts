const instanceCache = new Map<string, InstanceClass>()

export class InstanceClass {
  constructor() {
    const className = this.constructor.name
    const existingInstance = instanceCache.get(className)

    if (existingInstance) {
      return existingInstance as this
    }

    instanceCache.set(className, this)
  }
}

export function useInstance(InstanceClass: new () => InstanceClass) {
  if (instanceCache.has(InstanceClass.name)) {
    return instanceCache.get(InstanceClass.name)!
  }

  return new InstanceClass()
}
