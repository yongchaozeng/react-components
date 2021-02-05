interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

export function filterPersons (persons: Person[], personType: string, criteria:Partial<Person>  ): Array<User>
export function filterPersons (persons: Person[], personType: string, criteria:Partial<Person>  ): Array<Admin>

export function filterPersons (persons: Person[], personType: string, criteria:Partial<Person>  ):Person[]  {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });
export const adminsOfAge24 = filterPersons(persons, 'dd', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);


type D = {
  name: string
  type: string
}
type B = {
  name: number
  type: string
}
let array: Array<D | B> = [
  {
    name: '张三',
    type: '1',
  },
  {
    name: 123,
    type: '2',
  },
]

function test1 ({ type }: Partial<D|B>):Array<D> 
function test1 ({ type }: Partial<D|B>):Array<B> 

function test1 ({ type }:Partial<D | B> ): Array<D | B> {
  return array.filter(item => item.type === type)
}

console.log(7, test1({ type: '1' }));



export default 123