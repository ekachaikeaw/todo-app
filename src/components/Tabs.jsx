export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props
  
  const tabs = ["All", "Open", "Completed"];
  return (
    
      <nav className="tab-container">
        {tabs.map((tab, tabInex) => {
          const numOfTasks = tab === 'All' ? todos.length:
            tab === 'Open' ? todos.filter(val => !val.complete).length:
            todos.filter(val => val.complete).length
          return (
            <button onClick={() => {setSelectedTab(tab)}}  key={tabInex} className={"tab-button " + (tab === selectedTab ? ' tab-selected': ' ')}>
              <h4>
                {tab}
                <span>({numOfTasks})</span>
              </h4>
            </button>
          );
        })}
        <hr />
      </nav>
    
  );
}
