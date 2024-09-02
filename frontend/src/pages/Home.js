import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {


    const navigate = useNavigate()

    useEffect(()=>{
        axios
          .get("http://localhost:4000/api/users/loggedin")
          .then((res) => {
            console.log(res);

            if(!res.data.valid){
                navigate('/login')
            }
          })
          .catch((err) => console.log(err));
    },[])

    return(
        <div>
           <h1>Welcome {}</h1> 
        </div>
    )
}

export default Home;