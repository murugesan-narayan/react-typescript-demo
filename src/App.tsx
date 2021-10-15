//import React from 'react';
//import logo from './logo.svg';
import "./App.css";
import { Text } from "./components/props/polymorphic/Text";
// import { CustomButton } from "./components/props/html/Button";
// import { CustomInput } from "./components/props/html/Input";
//import { Toast } from "./components/template/literals/Toast";
// import { RandomNumber } from "./components/props/restriction/RandomNumber";
//import { List } from "./components/props/generic/List";
// import { Private } from "./components/props/component/Private";
// import { Profile } from "./components/props/component/Profile";
//import { Counter } from "./components/class/Counter";
//import { DomRef } from "./components/ref/DomRef";
// import { MutableRef } from "./components/ref/MutableRef";
// import { User } from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContext";
// import { Box } from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { Counter } from "./components/state/Counter";
// import { Button } from "./components/props/events/Button";
// import { Input } from "./components/props/events/Input";
// import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
// import { Container } from "./components/style/Container";
//import { Heading } from "./components/props/Heading";
// import { Oscar } from "./components/props/Oscar";
// import { Greet } from "./components/props/Greet";
// import { Person } from "./components/props/Person";
// import { PersonList } from "./components/props/PersonList";
//import { Status } from "./components/props/Status";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ganesh" courseCount={12} isLoggedIn={false} />
      <Person name={{ first: "Dwyne", last: "Bravo" }} />
      <PersonList
        persons={[
          { first: "Brain", last: "Lara" },
          { first: "Sunil", last: "Naraine" },
        ]}
      /> */}
      {/* <Status status="loading" />
      <Status status="success" />
      <Status status="error" /> */}
      {/* <Status status="error2" /> - this will give error as error2 is not possible value */}

      {/* <Heading>Placeholder text</Heading>
      <Oscar>
        <h2>Oscar goes to Dirk Joe</h2>
      </Oscar> */}
      {/* <Button
        handleClick={(e, id) => {
          console.log(id, "Button clicked", e);
        }}
      />
      <Input
        handleChange={(e) => {
          console.log("On Change", e);
        }}
        value=""
      />
      <Container
        styles={{
          border: "5px solid black",
          padding: "1rem",
          width: "151px",
          marginLeft: "295px",
        }}
      /> */}
      {/* <LoggedIn />
      <User />
      <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      {/* <Counter message="Count Value: " /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["Tong", "Ming", "Chong"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[{ name: "n1" }, { name: "n2" }, { name: "n3" }]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={12} isPositive /> */}
      {/* <RandomNumber value={12} isPositive isNegative/> //this will give error */}
      {/* <Toast position="center" /> */}
      {/* <CustomButton
        variant="primary"
        onClick={() => console.log("custom button Test clicked")}
      >
        Test
      </CustomButton>
      <CustomInput name="test" /> */}
      <Text as="h1" size="lg" color="primary">
        Test LG
      </Text>
      <Text as="p" size="md" color="secondary">
        Test MD
      </Text>
      <Text as="label" htmlFor="lid" size="sm" color="secondary">
        Test SM
      </Text>
    </div>
  );
}

export default App;
