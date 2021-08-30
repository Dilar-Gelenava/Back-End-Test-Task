import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import Navbar from './components/navbar';
import MainPage from './pages/main-page';
import RepoDetailed from './components/repos/repo-detailed';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/repo">
              <RepoDetailed />
            </Route>
            <Route path="/about">
              <center>
                <h1 className="text-light">
                  This page was made by Dilar Gelenava
                </h1>
              </center>
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
