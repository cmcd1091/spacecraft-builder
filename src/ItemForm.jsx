import { useState, useRef } from 'react';
import './ItemForm.css';

const ItemForm = ({ addItem }) => {

  const INITIAL_STATE = {
    itemName: "",
    quantity: "", 
    purpose: ""
  }

  const itemNameRef = useRef();
  const quantityRef = useRef();
  const purposeRef = useRef();


  const [formData, setFormData] = useState(INITIAL_STATE);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))

    setErrors(errors => ({
      ...errors,
      [e.target.name]: false
    }));
  }

  const handleCheckboxChange = (e) => {
   setAgreed(e.target.checked)

   setErrors(errors => ({
    ...errors,
    agreed: false
   }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.itemName.trim()) newErrors.itemName = true;
    if (!formData.quantity.trim()) newErrors.quantity = true;
    if (!formData.purpose.trim()) newErrors.purpose = true;
    if (!agreed) newErrors.agreed = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    addItem(formData.itemName, formData.quantity, formData.purpose);
    setFormData(INITIAL_STATE);
    setAgreed(false);
    setErrors({});

  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div
          className={errors.itemName ? 'error' : 'input-box'}
          onClick={() => itemNameRef.current.focus()}
        >
          <input
            ref={itemNameRef}
            type='text' 
            name='itemName'
            id='itemName'
            placeholder='Name'
            value={formData.itemName} 
            onChange={handleChange}
          />
        </div>

        <div 
          className={errors.quantity ? 'error' : 'input-box'}
          onClick={() => quantityRef.current.focus()}
        >
          <input 
            ref={quantityRef}
            type='text' 
            name='quantity'
            id='quantity'
            placeholder='Quantity' 
            value={formData.quantity} 
            onChange={handleChange}
          />
        </div>

        <div 
          className={errors.purpose ? 'purpose-error' : 'purpose-box'}
          onClick={() => purposeRef.current.focus()}
        >
          <input
            ref={purposeRef}
            type='text' 
            name='purpose' 
            id='purpose'
            placeholder='Purpose' 
            value={formData.purpose} 
            onChange={handleChange}
          />
        </div>

        <label>
          <div className={errors.agreed ? 'error' : 'input-box'}>
            <input
              type='checkbox'
              id='agree'
              checked={agreed}
              onChange={handleCheckboxChange}
            />
            Agree to terms
          </div>
        </label>

        <div id="add-btn-container">
          <button>Add</button>
        </div>

      </form>
    </>
  )
}

export default ItemForm;