// function convertJsonIntoJsObject(obj) {
//   const newObjectKeys = Object.keys(obj).map(key => {
//     if (key.includes('_'))
//       return key.replace(/_./g, match => match.charAt(1).toUpperCase())

//     return key
//   })

//   const objectValues = Object.values(obj)

//   const newObject = {}

//   for (let i = 0; i < newObjectKeys.length; i += 1) {
//     newObject[newObjectKeys[i]] = objectValues[i]
//   }

//   return newObject
// }
// export default convertJsonIntoJsObject

function convertKeysToCamelCase(key) {
  if (key.includes('_')) {
    return key.replace(/_./g, match => match.charAt(1).toUpperCase())
  }
  return key
}

function convertJsonIntoJsObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertJsonIntoJsObject(item))
  }

  const newObject = {}

  Object.entries(obj).forEach(([key, value]) => {
    const newKey = convertKeysToCamelCase(key)
    newObject[newKey] = convertJsonIntoJsObject(value)
  })

  return newObject
}

export default convertJsonIntoJsObject
