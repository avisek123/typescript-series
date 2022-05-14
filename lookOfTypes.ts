// Look of types or index access types 
interface IMyAdd {
    id: number,
    name: string,
    city?: string,
    age?: number,
    pin?: number
}
type IMyCity = {
    city: string

}

/* function one without look-of types  */
function BankAccount(id: number, name: string, city: IMyCity) {
    return {
        id,
        name,
        city,
    }
}
type IIMyCity = {
    city: number

}
/* function two with look-of types */
function Bank(id: number, name: string, city: IMyAdd['city']) {
    return {
        id,
        name,
        city,
    }
}
