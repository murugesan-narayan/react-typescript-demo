type GreetProps = {
  name: string;
  courseCount: number;
  isLoggedIn: boolean;
  offerMsg?: string; // here '?' is used for optional offer msg.
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {props.isLoggedIn ? props.name : "Guest"} to React Typescript!
      </h2>
      <h2>You have {props.courseCount} new courses.</h2>
    </div>
  );
};
