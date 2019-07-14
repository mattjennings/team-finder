/**
 * Gets an object's value by it's key case-insensitively
 */
export function getByKey<T>(object: T, key: string) {
  const keys = Object.keys(object)
  const lowerKeys = keys.map(k => {
    return k.toLowerCase()
  })

  const index = lowerKeys.indexOf(key.toLowerCase())
  if (index !== -1) {
    const foundKey = keys[index]
    return object[foundKey as keyof T]
  }

  return undefined
}
