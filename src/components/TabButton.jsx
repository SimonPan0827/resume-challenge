import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "tab-button active" : "tab-button";

  return (
    <button onClick={selectTab} className={buttonClasses}>
      {children}
    </button>
  );
};

export default TabButton;