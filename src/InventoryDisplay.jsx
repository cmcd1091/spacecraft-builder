import ItemCard from './ItemCard';

const InventoryDisplay = ({ inventory }) => {  
  
  return (
    <div>
      {inventory.map(item => <ItemCard itemName={item.itemName} quantity={item.quantity} purpose={item.purpose} />)}
    </div>
  )
}

export default InventoryDisplay;