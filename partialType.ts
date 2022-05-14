/* all properties of IUser is set to optional  */
interface IUser {
    id: string,
    name: string,
    age: number
}
const UpdateUser = (user: Partial<IUser>) => {
    user?.age

}
/* Only update the age   */
UpdateUser({ age: 10 })