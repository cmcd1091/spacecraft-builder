import './ItemAction.css'

const ItemAction = ({ deleteItem }) => {

  return (
    <div className="delete-container">
      <button onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default ItemAction;