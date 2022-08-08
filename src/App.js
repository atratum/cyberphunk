import {ReactComponent as LogoIcon} from './assets/svg/logo-icon.svg';
import {ReactComponent as LogoText} from './assets/svg/logo-text.svg';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container"></div>
      </header>
      <main>
        <div className="container text-center">
          <LogoText className="logo-text"/>
          <h1 className="tagline">Bespoke cyber solutions</h1>
        </div>
      </main>
      <footer>
        <div className="container">
          <LogoIcon className="logo-icon"/>
        </div>
      </footer>
      <div className="stroke"></div>
    </div>
  );
}

export default App;
