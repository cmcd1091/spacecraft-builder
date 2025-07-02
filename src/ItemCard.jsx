const ItemCard = ({ itemName, quantity, purpose }) => {

  return (
    <>
      <div>
        <h3>{itemName}</h3>
      </div>
      <div>
        Quantity: {quantity}
      </div>
      <div>
        Purpose: {purpose}
      </div>
    </>
  )
}

export default ItemCard;