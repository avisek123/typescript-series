type user = {
    name: string;
    age: string;
    id: string

}
let measure: user = {
    name: '',
    age: '',
    id: ''

}
/* function without keyof types */
const functionChangeKeyValue = (object: user, key: 'name' | 'id', value: string) => {
    object[key] = value;
    return object;

}
functionChangeKeyValue(measure, 'name', 'ramesh');

/* function with keyof types */
const functionChangeKeyValue1 = (object: user, key: keyof user, value: user[keyof user]) => {
    object[key] = value;
    return object;


}
functionChangeKeyValue1(measure, 'name', '');



