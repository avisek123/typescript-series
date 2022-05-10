const addUid = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };

}
/* call the function  */
const obj = addUid({ name: 'John', age: 12, height: 12 });
console.log(obj.name)


/* with the interface  */
interface Resource<T> {
    uid: number,
    name: string,
    data: T
}
const result: Resource<string> = {
    uid: 1,
    name: 'John',
    data: "some data"
}