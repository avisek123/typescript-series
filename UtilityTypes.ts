interface MyUser {
    name: string;
    age: number;
    address: string;
}
/* ========================= Partial Types ================================ */
/* Here we are going to use partial types , in that we have to declare new type  */
type PartialUser = Partial<MyUser>;
/* in partialUser type all attributes are optional */

/* ========================= Required Types ================================ */
/* Here we are going to use partial types , in that we have to declare new type  */
type RequiredUser = Required<MyUser>;
/* in partialUser type all attributes are required */

/* ========================= Pick Types ================================ */
type JustEmitName = Pick<MyUser, 'name'>;

