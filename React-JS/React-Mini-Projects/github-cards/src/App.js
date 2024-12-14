import { useState } from "react";
import CardList from "./CardList";
import SearchUser from "./SearchUser";
import testData from './test-data.json';

function App() {
  let [profiles, setProfile] = useState(testData);
  return (
    <div>
      <h1>Github Cards</h1>
      <SearchUser />
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
