import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { Form, Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Input, Switcher, Title, Wrapper } from "../components/auth-component";

function Login() {
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigator = useNavigate();


    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {
                name,
                value
            }
        } = e;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isLoading || email === "" || password === "") { return; }

        try {
            setLoading(true);

            //1. create new account
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            console.log (credentials.user);
            //2. set name
           
            //3. redirect to home
            navigator("/");

        } catch (e) {
            // set Error message
            if (e instanceof FirebaseError) {
                setError(e.message);
            }


        } finally {
            setLoading(false);
        }
        

        console.log(name, email, password);
    }

    return (
        <Wrapper>
            <Title>Login Into</Title>
            <Form onSubmit={onSubmit}>
                <Input name="email" onChange={onChange} value={email} placeholder="Email" type="email" required></Input>
                <Input name="password" onChange={onChange} value={password} placeholder="Password" type="password" required></Input>
                <Input name="onSubmit" value={isLoading ? "Loading..." : "Login"} placeholder="Submit" type="submit" required></Input>
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account? <Link to="/create-account"> createAccount</Link>
            </Switcher>
        </Wrapper>
    );
}

export default Login;