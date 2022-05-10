const addUid = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };

}
/* call the function  */
const obj = addUid({ name: 'John', age: 12, height: 12 });
console.log(obj.name)