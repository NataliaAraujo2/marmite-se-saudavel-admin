import React, { useState } from "react";
import styles from "./Users.module.css";
//hooks
import { useNavigate, Link } from "react-router-dom";

const Users = () => {
  const [query, setQuery] = useState("");
  const [users] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.users}>
      <h1>Lista de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Busque por nome do cliente"
          onChange={(e) => setQuery(e.target.value)}
        >
        </input>
        <button>Pesquisar</button>
      </form>
      <div>
        <h3>Clientes</h3>
        {users && users.length === 0 && (
          <div className={styles.nousers}>
            <h4>
              Não há clientes com esse nome! Confirma se digitou corretamente.
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
