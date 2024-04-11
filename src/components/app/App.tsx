import { FC } from "react";
import FormComponent from "../formComponent/FormComponent";
import UserSettings from "../userSettings/UserSettings";

const App: FC = () => {
  return (
    <>
      <FormComponent />
      <UserSettings />
    </>
  );
};

export default App;
