import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);
  //we can declare in both ways,in second, it is type assertion with AuthUser.
  //so null check is not required.
  const handleLogin = () => {
    setUser({ name: "React", email: "react@mail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User Name is {user?.name}</div>
      <div>User Name is {user?.email}</div>
    </div>
  );
};
