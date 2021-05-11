import buildIds from '../buildIds'

describe('given some ids', () => {
  test('it should return the comma separated id string when given an array of number', () => {
    const input = [1, 2, 3]
    const expected = '1,2,3'
    expect(buildIds(input)).toEqual(expected)
  })

  test('it should return the comma separated id string when given an array of string', () => {
    const input = ['1', '2', '3']
    const expected = '1,2,3'
    expect(buildIds(input)).toEqual(expected)
  })

  test('it should return the same comma separated id string when given a comma separated id string', () => {
    const input = '1,2,3'
    const expected = '1,2,3'
    expect(buildIds(input)).toEqual(expected)
  })

  test('it should return a string when given a number', () => {
    const input = 1
    const expected = '1'
    expect(buildIds(input)).toEqual(expected)
  })

  test('it should return an empty string when given an empty array', () => {
    const input: Array<string> = []
    const expected = ''
    expect(buildIds(input)).toEqual(expected)
  })

  test('it should return an empty string when given undefined', () => {
    const input = undefined
    const expected = ''
    expect(buildIds(input)).toEqual(expected)
  })
})
