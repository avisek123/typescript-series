interface A {
    a: number;
    b: number;
    c: number;
}
type C = Omit<A, 'a'>;