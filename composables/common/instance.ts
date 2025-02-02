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

export function useInstance<T>(InstanceClass: new () => T): T {
  if (instanceCache.has(InstanceClass.name)) {
    return instanceCache.get(InstanceClass.name) as T
  }

  return new InstanceClass()
}
