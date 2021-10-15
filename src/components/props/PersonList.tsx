import { Person } from "./Person";
import { Name } from "./Person.types";

type PersonListProps = {
  persons: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.persons.map((person) => (
        <Person key={person.first} name={person} />
      ))}
    </div>
  );
};
