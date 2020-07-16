import { composition } from './index'

describe('composition', () => {
  it('two functions same type', () => {
    const a = (x: number) => x + 1
    const b = (y: number) => y + 20
    const comp = composition(a, b)
    expect(comp(10)).toEqual(31)
  })

  it('two function different type', () => {
    const a = (x: number) => `number: ${x}`
    const b = (y: string) => `${y} + 10`
    const comp = composition(a, b)
    expect(comp(10)).toEqual('number: 10 + 10')
  })
})
