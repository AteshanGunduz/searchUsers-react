
import { useState, useEffect } from "react"
import Users from "./Users"


const App = () => {
    const [userName, setUserName] = useState("")
    const[data, setData] = useState([])
    // const[userData, setUserData] = useState([])

   
const fetchData = async ()=>{
    try {
        const res = await fetch(`https://api.github.com/users/${userName}`)
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const user = await res.json();
        setData((prevUsers) => [...prevUsers, user]);
      } catch (e) {
        console.error("Error fetching data:", e);
    }
}

useEffect(() => {
  fetchData();
}, [userName]);

console.log(data);


const handleClick = async (inputValue)=>{
    setUserName(inputValue)
 }
 console.log(userName);

 const deleteUser = (id) => {
  const updatedUsers = data.filter((user) => user.id !== id)
  setData(updatedUsers)
 }

 




  return (
    <div className="bigbox">
     <Users handleClick={handleClick} data={data} deleteUser={deleteUser}/>
    </div>
  )
}
export default App