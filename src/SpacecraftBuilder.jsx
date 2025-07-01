import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

const SpacecraftBuilder = () => {
  const [inventory, setInventory] = useState([])

  const addItem = (itemName, quantity, purpose) => {
    setInventory(prev => [
      ...prev, 
      { itemName, quantity, purpose }
    ])
  }
  
  return (
    <>
      <ItemForm addItem={addItem}/>
      <h2>Inventory</h2>
      <InventoryDisplay inventory={inventory}/>
    </>
  )
}

export default SpacecraftBuilder;