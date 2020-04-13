import _ from 'lodash'

export async function postRequest(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  })
  return response.json()
}

// function to create magicString. Index 1, 3 and 5 are a number between 4-6
export function magicString() {
  let randomString = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  const random = _.random(50, 150)

  for (let i = 0; i < random; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  const set = (str: string, idx: number, val: string) => idx > str.length - 1
    // if the given idx is not in the string length return string
    ? str
    // if the given id is in string length, replace the character of the string
    : `${ str.substr(0, idx) }${ val }${ str.substr(idx + 1) }`

  // on the given indexes 1,3 and 5 of randomString, generate a number between 4 and 6
  const indexesToBeRandomized = [1, 3, 5]
  const rng = () => String(_.random(4, 6))
  indexesToBeRandomized.forEach((val) =>  randomString = set(randomString, val, rng()))

  return randomString
}
