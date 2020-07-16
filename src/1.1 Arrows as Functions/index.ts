export function composition<A, B, C>(
  f: (p1: A) => B,
  g: (p2: B) => C,
): (p: A) => C {
  return (x: A) => g(f(x))
}
