import useLocalStorage from "../../hooks/useLocalStorage";

const UserSettings = () => {
  const [name, setName] = useLocalStorage<string>("name", "");

  return (
    <div>
      <label htmlFor="name">Имя пользователя:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default UserSettings;
