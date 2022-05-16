interface A {
    a: number;
    b: number;
    c: number;
}
type B = Pick<A, 'a' | 'b'>;