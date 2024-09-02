import axios from "axios"
import { useEffect, useState } from "react"

const CustomerDashboard = () => {
    const [name, setName] = useState('');


    useEffect(() => {
      axios
        .get("http://localhost:4000/api/users/loggedin")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            Customer dashboard
        </div>
    )
}

export default CustomerDashboard;