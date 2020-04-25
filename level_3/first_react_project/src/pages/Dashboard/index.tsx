import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import githubLogo from '../../assets/github_logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={githubLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/10995394?s=460&u=fde11355205c04142c93b2c0746cc361597e87b3&v=4"
            alt="Christian Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & ReactNative forms</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/10995394?s=460&u=fde11355205c04142c93b2c0746cc361597e87b3&v=4"
            alt="Christian Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & ReactNative forms</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/10995394?s=460&u=fde11355205c04142c93b2c0746cc361597e87b3&v=4"
            alt="Christian Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & ReactNative forms</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
