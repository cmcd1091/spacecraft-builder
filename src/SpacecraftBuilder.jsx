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

  const deleteItem = (itemName) => {
    setInventory(prev => prev.filter(item => item.itemName !== itemName))
  }
  
  return (
    <>
      <ItemForm addItem={addItem}/>
      <h2>Inventory</h2>
      <InventoryDisplay inventory={inventory} deleteItem={deleteItem}/>
    </>
  )
}

export default SpacecraftBuilder;