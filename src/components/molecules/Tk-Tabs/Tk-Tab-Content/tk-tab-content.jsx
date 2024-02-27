
const TkTabContent = ({isActiveTab, children }) => {
  return (
    <div className={isActiveTab ? 'tab-active': 'tab-inactive'}>
      {children}
    </div>
  );
};

export default TkTabContent;
