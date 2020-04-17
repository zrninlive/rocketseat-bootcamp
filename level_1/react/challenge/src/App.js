import React, { useEffect, useState } from "react";

import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get("repositories");

      setRepositories(response.data);
    }

    loadRepositories();
  }, []);

  async function handleAddRepository() {
    try {
      const timestamp = Date.now();

      const response = await api.post("repositories", {
        title: `New Project ${timestamp}`,
        url: `https://github.com/zrninlive/${timestamp}`,
        techs: ["React", "NodeJS", "ReactNative"],
      });

      setRepositories([...repositories, response.data]);
    } catch (error) {
      alert("Falha ao adicionar, tente novamente!");
    }
  }

  async function handleRemoveRepository(id) {
    try {
      await api.delete(`repositories/${id}`);
      setRepositories(repositories.filter((repo) => repo.id !== id));
    } catch (error) {
      alert("Falha ao remover, tente novamente!");
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
