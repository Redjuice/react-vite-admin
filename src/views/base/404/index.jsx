import { useHistory } from 'react-router-dom';
import './index.less';

export default function NotFound() {
  const history = useHistory();
  const goBack = () => {
    history.go(-1);
  };
  return (
    <div className="not-found" data-component="not-found">
      <img className="img" src={`src/assets/empty/empty-404.png`} />
      <div className="title">抱歉，您查找的页面不存在</div>
      <div className="text-box">
        <span className="text-01">您可以：</span>
        <span className="text-02" onClick={goBack}>
          返回上一页
        </span>
      </div>
    </div>
  );
}
