type user = {
    name: string;
    age: string;
    id: string

}
type account = {
    name: string;
    acNumber: string;
}
let measure: user = {
    name: '',
    age: '',
    id: ''

}
let myAccount: account = {
    name: '',
    acNumber: ''
}

/* function without keyof types */
const functionChangeKeyValue = (object: user, key: 'name' | 'id', value: string) => {
    object[key] = value;
    return object;

}
functionChangeKeyValue(measure, 'name', 'ramesh');

/* function with keyof types */
const functionChangeKeyValue1 = <T>(object: T, key: keyof T, value: T[keyof T]) => {
    object[key] = value;
    return object;


}
functionChangeKeyValue1(measure, 'name', '');
functionChangeKeyValue1(myAccount, 'name', '');



