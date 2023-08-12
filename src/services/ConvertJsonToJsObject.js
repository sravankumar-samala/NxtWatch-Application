function convertJsonIntoJsObject(obj) {
  const newObjectKeys = Object.keys(obj).map(key => {
    if (key.includes('_'))
      return key.replace(/_./g, match => match.charAt(1).toUpperCase())

    return key
  })

  const objectValues = Object.values(obj)

  const newObject = {}

  for (let i = 0; i < newObjectKeys.length; i += 1) {
    newObject[newObjectKeys[i]] = objectValues[i]
  }

  return newObject
}
export default convertJsonIntoJsObject
