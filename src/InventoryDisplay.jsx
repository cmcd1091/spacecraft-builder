import ItemCard from './ItemCard';
import ItemAction from './ItemAction';
import './InventoryDisplay.css'

const InventoryDisplay = ({ inventory, deleteItem }) => {  
  
  return (
    <div>
      {inventory.map(item => 
      <div className="item-container">
        <ItemCard itemName={item.itemName} quantity={item.quantity} purpose={item.purpose} />
        <ItemAction deleteItem={() => deleteItem(item.itemName)}/>
      </div>
      )}
    </div>
  )
}

export default InventoryDisplay;