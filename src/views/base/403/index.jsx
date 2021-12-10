import { useHistory } from 'react-router-dom';
import { selectMenuKey } from '@/utils/private/router';
import './index.less';

export default function notAuth() {
  const history = useHistory();
  const goBack = () => {
    history.go(-1);
  };
  const goHome = () => {
    history.push(selectMenuKey.split('_').join('/'));
  };
  return (
    <div className="not-auth" data-component="not-auth">
      <img className="img" src={`src/assets/base/no-auth.png`} />
      <div className="title">抱歉，您没有访问该页面的权限</div>
      <div className="text-box">
        <div className="text-01">您可以：</div>
        <div className="text-02" onClick={goBack}>
          返回上一页
        </div>
        <div className="text-03" onClick={goHome}>
          前往平台首页
        </div>
      </div>
    </div>
  );
}
