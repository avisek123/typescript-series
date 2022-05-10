interface MyUser {
    name: string;
    age: number;
    address: string;
}
/* Here we are going to use partial types , in that we have to declare new type  */
type PartialUser = Partial<MyUser>;
/* in partialUser type all attributes are optional */
