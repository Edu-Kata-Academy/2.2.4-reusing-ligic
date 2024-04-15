import { useState } from 'react';


type InitialState = boolean;

type ToggleHook = [boolean, () => void];

function useToggle(initialState: InitialState = false): ToggleHook {
  const [state, setState] = useState<InitialState>(initialState);

  const toggle = () => setState(prevState => !prevState);

  return [state, toggle];
}

export default useToggle;