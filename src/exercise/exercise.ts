import { UseRequestProvider } from "ahooks";

//  第二题
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User| Admin;
let c: Person = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    role: "Administrator",
}


export const persons :Person[]/* <- Person[] */ = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
      name: "Kate Müller",
      age: 23,
      occupation: "Astronaut",
    },
    {
      name: "Bruce Willis",
      age: 64,
      role: "World saver",
    },
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);



export default 123