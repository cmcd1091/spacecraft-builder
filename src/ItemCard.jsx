const ItemCard = ({ itemName, quantity, purpose }) => {

  return (
    <>
      <div>
        {itemName}
      </div>
      <div>
        {quantity}
      </div>
      <div>
        {purpose}
      </div>
    </>
  )
}

export default ItemCard;