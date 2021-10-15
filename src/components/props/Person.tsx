import { PersonProps } from "./Person.types";

export const Person = ({ name }: PersonProps) => {
  //destructuring is permitted in declaration with type
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
