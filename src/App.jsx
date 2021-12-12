import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import store from '@/redux/store';
import allRoutes from './routes';
console.log(allRoutes);

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* 将路由配置渲染成节点 */}
        {renderRoutes(allRoutes)}
      </Router>
    </Provider>
  );
}

export default App;
