import { FC } from "react";
import UserSettings from "../userSettings/UserSettings";
import ToggleComponent from "../toggleComponent/ToggleComponent";

const App: FC = () => {
  return (
    <>
      <ToggleComponent />
      <UserSettings />
    </>
  );
};

export default App;
