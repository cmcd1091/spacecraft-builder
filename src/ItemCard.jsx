import './ItemCard.css';

const ItemCard = ({ itemName, quantity, purpose }) => {

  return (
    <>
      <div className="item-container">
        <div className='item-name'>
          <h3>{itemName}</h3>
        </div>
        <div className='quantity'>
          Quantity: {quantity}
        </div>
        <div className='purpose'>
          Purpose: {purpose}
        </div>
      </div>
    </>
  )
}

export default ItemCard;