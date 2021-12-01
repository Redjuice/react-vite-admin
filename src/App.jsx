import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { renderRoutes } from 'react-router-config';
import allRoutes from './routes';

function App() {
  console.log(111);
  return (
    <Provider store={store}>
      <Router>
        {console.log(renderRoutes(allRoutes))}
        {/* 将路由配置渲染成节点 */}
        {renderRoutes(allRoutes)}
      </Router>
    </Provider>
  );
}

export default App;
