import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import githubLogo from '../../assets/github_logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={githubLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/10995394?s=460&u=fde11355205c04142c93b2c0746cc361597e87b3&v=4"
            alt="Christian Oliveira"
          />
          <div>
            <strong>Rockeseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              possimus consequuntur commodi mollitia. Necessitatibus voluptas
              aliquid perferendis. Culpa mollitia quisquam assumenda repudiandae
              omnis, sint quis deserunt fuga, eum adipisci aut?
            </p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="">
          <div>
            <strong>asdas</strong>
            <p>asidoas</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
