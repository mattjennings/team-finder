/**
 * Gets an object's value by it's key case-insensitively
 */
export const getByKey = (object: object, key: string) => {
  const keys = Object.keys(object)
  const lowerKeys = keys.map(k => {
    return k.toLowerCase()
  })

  const index = lowerKeys.indexOf(key.toLowerCase())
  if (index !== -1) {
    return object[keys[index]]
  }
  return undefined
}
