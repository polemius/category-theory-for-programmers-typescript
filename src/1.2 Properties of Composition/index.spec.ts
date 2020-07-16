import fc from 'fast-check'
import { id } from '.'
import { composition } from '../1.1 Arrows as Functions'

describe('tests', () => {
  it('identity should retur the same value', () => {
    fc.assert(
      fc.property(fc.anything(), value => {
        expect(value).toBe(id(value))
      }),
    )
  })
  it('composition shoule be associative', () => {
    const a = (x: number) => x + 1
    const b = (y: number) => y + 20
    const comp = composition(a, b)
    const comp2 = composition(b, a)
    fc.assert(
      fc.property(fc.float(), v1 => {
        expect(comp(v1)).toBe(comp2(v1))
      }),
    )
  })
  it('function and identity shoule get the same function', () => {
    const a = (x: number): number => x + 1
    fc.assert(
      fc.property(fc.float(), v1 => {
        expect(id(a(v1))).toBe(a(v1))
        expect(a(id(v1))).toBe(a(v1))
      }),
    )
  })
})
