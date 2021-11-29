import './index.less';
export default function LayoutEmpty({
  emptyText = '暂无数据',
  emptyType = 'list',
  children
}) {
  const emptys = ['list', '404'];
  const img = import.meta.globEager('../../assets/empty/*')[
    `../../assets/empty/empty-${emptyType}.png`
  ];
  return (
    <div className="empty" data-component="empty">
      {emptys.map((item, index) => {
        if (emptyType === item)
          return <img className="img" key={index} src={img.default} />;
        return null;
      })}
      {children || <div className="text">{emptyText}</div>}
    </div>
  );
}
