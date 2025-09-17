import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItem] = useState([]);

  function handleAddItems(item) {
    //console.log("items variable comes from useState variable items : ", items);
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    //console.log("function id : ", id);
    //items.map((item) => console.log(item.id !== id));

    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are You Sure Delete ?");
    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
