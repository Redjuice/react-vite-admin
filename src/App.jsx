import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Login from '@/views/base/Login';
import NotFound from '@/views/base/404';
import Layout from '@/Layout/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
