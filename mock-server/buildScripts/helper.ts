export function combineSchema(array1: any[], array2: any[]): any[] {
  const tempArray: any[] = [...array1, ...array2]
  const combinedArray: any[] = []
  const len = tempArray.length

  for (let i = 0; i <= len / 2; i++) {
    combinedArray.push(tempArray[i])
    combinedArray.push(tempArray[len - 1 - i])
  }

  return combinedArray
}
