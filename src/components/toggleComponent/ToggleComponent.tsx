import { FC } from 'react';
import useToggle from '../../hooks/useToggle';

const ToggleComponent: FC = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>Статус: {isToggled ? 'Включено' : 'Выключено'}</p>
      <button onClick={toggle}>
        {isToggled ? 'Выключить' : 'Включить'}
      </button>
    </div>
  );
};

export default ToggleComponent;