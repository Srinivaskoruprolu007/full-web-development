import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../store/authentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return <div>
    
  </div>;
};

export default Login;
