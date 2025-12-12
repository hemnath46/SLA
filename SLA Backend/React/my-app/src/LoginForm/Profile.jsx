import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setProfile(response.data); // store profile in state
            })
            .catch((error) => {
                console.log("Error fetching profile:", error);
            });
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
          {profile ? (
    profile.map((user) => (
        <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <hr />
        </div>
    ))
) : (
    <p>Loading...</p>
)}
           
        </div>
    );
}

export default Profile;