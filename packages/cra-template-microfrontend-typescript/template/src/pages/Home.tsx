import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const HomePage = (props: { basePath: string | undefined }) => {
  return (
    <div>
      <header className="App-header">
        <div>
          <h1>Congrats! This is your brand new Micro-Frontend!</h1>
        </div>
        <nav>
          <ul className="App-nav">
            <li>
              <NavLink className="App-link" to="/page-one">
                Page One
              </NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/page-two">
                Page Two
              </NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/this-page-does-not-exist">
                Not Found
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          src={`${props.basePath !== '' ? props.basePath : ''}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://martinfowler.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          And Software Fundamentals!
        </a>
      </header>
    </div>
  );
};

export default HomePage;
