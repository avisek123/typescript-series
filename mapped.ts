export type Point = {
    x: number,
    y: number,
    z: number

}
export type NonRead<T> = {
    [Key in keyof T]: T[Key]
}
export type ReadOnly<T> = {
    readonly [Key in keyof T]: T[Key]
}

export const origin: NonRead<Point> = {
    x: 0,
    y: 0,
    z: 0
}
origin.x = 5

export const origin2: ReadOnly<Point> = {
    x: 0,
    y: 0,
    z: 0
}
/* Readonly can't write  */
origin2.x = 5