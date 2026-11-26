import { useParams } from 'react-router-dom';

function Items() {
  const { option } = useParams();
  const sampleItems = [
    { id: 1, name: 'Apples', description: 'Granny Smith', quantity: 10 },
    { id: 2, name: 'Milk', description: 'Whole Milk', quantity: 3 },
  ];

  const views: Record<string, { title: string; list: typeof sampleItems }> = {
    all: { title: 'All Inventories', list: sampleItems },
    myInventory: { title: 'My Inventory', list: sampleItems.slice(0, 1) },
  };

  const view = views[option ?? ''] ?? { 
    title: 'Inventory not found', 
    list: [] 
  };
  // GET

  return(
    <div className="item-list">
      <h2>{view.title}</h2>
      {view.list.map((item) => (
        <div className="item-card" key={item.id}>
          <p id="name">{item.name}</p>
          <p id="description">{item.description}</p>
          <div id="quantity">
            <p>Quantity:</p>
            {item.quantity}
          </div>
          <button id="edit-btn">edit</button>
          <button id="delete-btn">delete</button>
        </div>
      ))}
    </div>
  )

}



export default Items;