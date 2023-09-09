import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { auth } from '../../firebase/config'


const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] =useState("")
const [error, setError] = useState("")
const { login, error: authError, loading } = useAuthentication(auth);

const handleSubmit = async (e) => {
  e.preventDefault();
  setEmail("");
  setPassword(""); 
  setError("");

  const user = {
    email,
    password,
  };

  const res = await login(user);
  console.log(res);
};

useEffect(() => {
  if (authError) {
    setError(authError);
  }
}, [authError]);

  return (
    <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
       <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
     
        {!loading && <button>Entrar</button>}
        {loading && <button disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login