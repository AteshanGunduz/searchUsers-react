import { useState } from "react";

const Users = ({handleClick, data, deleteUser}) => {
    const[userName, setUserName] = useState("")
  
 const handleInputChange = (e) => {
       setUserName(e.target.value)
     };

  return (
    <div className="container">
    <div>
        <h2>GitHub User Search</h2>
    </div>
    <div className="quote-container">
        <div className="input-container">
        <input onChange={handleInputChange}/>
        <button onClick={() => handleClick(userName)}>Add User</button>
        </div>
        <div className="user-container">
        <h3>Users</h3>
        {data.map((user) => (
                       <div>
                        <a href={user.html_url} key={user.id} target="_blank">
                            <img src={user.avatar_url}/>
                            <h5>{user.login}</h5>
                        </a>
                        <button onClick={()=> deleteUser(user.id)}>X</button>
                        </div>
                    ))}
        </div>
    </div>
</div>
  )
}
export default Users