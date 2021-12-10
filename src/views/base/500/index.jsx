import './index.less';

export default function notNet() {
  return (
    <div className="not-net" data-component="not-net">
      <img className="img" src={`src/assets/empty/empty-net.png`} />
      <div className="title">网络走丢了～ 请稍后重试～</div>
    </div>
  );
}
