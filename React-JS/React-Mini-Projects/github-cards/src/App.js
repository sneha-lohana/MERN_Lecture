import { useEffect, useState } from "react";
import CardList from "./CardList";
import SearchUser from "./SearchUser";
// import testData from './test-data.json';

function fetctUsers(){
  fetch("http://localhost:3000/test-data.json")
  .then(res => res.json()) 
  .then(data => console.log(data))
}

fetctUsers();

function App() {
  let [profiles, setProfiles] = useState([]);

  // function fetctUsers(){
  //   fetch("http://localhost:3000/test-data.json")
  //   .then(res => res.json()) 
  //   .then(data => setProfiles(data))
  // }
  
  // fetctUsers();

  useEffect(()=> {
    fetch("http://localhost:3000/test-data.json")
    .then(res => res.json()) 
    .then(data => setProfiles(data))
  }, [])

  const searchUsers = (username) => {
    console.log(username);
    const users = profiles.filter(profile => {
      return profile.login.toLowerCase().includes(username.toLowerCase());
    });
    setProfiles(users);
  }

  return (
    <div>
      <h1>Github Cards</h1>
      <SearchUser onSearch={searchUsers}/>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
