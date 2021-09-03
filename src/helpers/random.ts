const generateRandom = (): string => {
  const array = new Uint32Array(1)
  window.crypto.getRandomValues(array)
  return array[0].toString()
}

export default generateRandom
