import { Button } from "../components/auth-component";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigator = useNavigate();

    const logout = () => {
        auth.signOut();
        navigator("/login")    
    }

    return (
        <>  
            <h1>Home!</h1>
            <Button onClick={logout}>Logout</Button>  
        </>
        
    );
}