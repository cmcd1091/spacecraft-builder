import { useState } from 'react';
import './ItemForm.css';

const ItemForm = ({ addItem }) => {

  const INITIAL_STATE = {
    itemName: "",
    quantity: "", 
    purpose: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    setFormData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData.itemName, formData.quantity, formData.purpose);
    setFormData(INITIAL_STATE)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <div className='input-box'>
          <input 
            type='text' 
            name='itemName'
            id='itemName'
            placeholder='Name'
            value={formData.itemName} 
            onChange={handleChange}/>
        </div>

        <div className='input-box'>
          <input 
            type='text' 
            name='quantity'
            id='quantity'
            placeholder='Quantity' 
            value={formData.quantity} 
            onChange={handleChange}/>
        </div>

        <div className='input-box'>
          <input 
            type='text' 
            name='purpose' 
            id='purpose'
            placeholder='Purpose' 
            className='purpose-box' 
            value={formData.purpose} 
            onChange={handleChange}/>
        </div>

        <div className='input-box'>
          <input type='checkbox'/><span>Agree to terms</span>
        </div>

        <div id="add-btn-container">
          <button>Add</button>
        </div>

      </form>
    </>
  )
}

export default ItemForm;