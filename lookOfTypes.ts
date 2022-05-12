// Look of types 
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


function BankAccount(id: IMyAdd['id'], name: string, city: IMyCity) {
    return {
        id,
        name,
        city,
    }
}