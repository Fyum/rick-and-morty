import buildQueryParams from '../buildQueryParams'

describe('given a query params object', () => {
  test('it should return the correct query params string', () => {
    const input = {
      page: 1,
    }
    const expected = '?page=1'

    expect(buildQueryParams(input)).toEqual(expected)
  })

  test('it should return the correct query params string with more than one value', () => {
    const input = {
      page: 1,
      name: 'rick',
    }
    const expected = '?page=1&name=rick'

    expect(buildQueryParams(input)).toEqual(expected)
  })

  test('it should return an empty string when the object is empty', () => {
    const input = {}
    const expected = ''

    expect(buildQueryParams(input)).toEqual(expected)
  })
})
