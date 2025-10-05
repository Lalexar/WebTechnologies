type Human = {
    age: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;

    address: string | undefined
    homeNumber: string | null
}

const joe: Human = {
    age: 20,
    firstName: 'Joe',
    lastName: 'Doe',
    address: undefined,
    homeNumber: null,
}