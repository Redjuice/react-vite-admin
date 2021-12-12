import './index.less';
export default function LayoutEmpty({
  emptyText = '暂无数据',
  emptyType = 'list',
  children
}) {
  return (
    <div className="layout-empty" data-component="layout-empty">
      <img
        className="layout-img"
        src={`/src/assets/empty/empty-${emptyType}.png`}
      />
      {children || <div className="layout-text">{emptyText}</div>}
    </div>
  );
}
