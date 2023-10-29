import React, { useState } from 'react';
import '../../App.css'; 
import apiActions from '../../actions'
import Swal from 'sweetalert2';
import { useUser } from '../Context/global.context';

function Bookings() {
  const { userState } = useUser();
  const [time, setTime] = useState('1:00 PM');
  const [people, setPeopleCount] = useState(2);
  const [selectedFood, setSelectedFood] = useState(''); // Initialize to a default food item
  const [foodItems, setFoodItems] = useState([]);

  const handleFoodChange = (e) => {
    setSelectedFood(e.target.value);
  };

  const addFoodItem = () => {
    // Check if the selected food already exists in foodItems
    const existingFood = foodItems.find((item) => item.name === selectedFood);

    if (existingFood) {
      // If the food already exists, increment its quantity and update the price
      const updatedFoodItems = foodItems.map((item) => {
        if (item.name === selectedFood) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: item.price + 10, // Assuming price is $10 per serving
          };
        }
        return item;
      });

      setFoodItems(updatedFoodItems);
    } else {
      // If the food doesn't exist, add it with default price and quantity
      const newFoodItem = {
        name: selectedFood,
        price: 10, // Set a default price
        quantity: 1, // Set a default quantity
      };

      setFoodItems([...foodItems, newFoodItem]);
    }
  };

  const handleQuantityChange = (index, quantity) => {
    if (quantity >= 1 && quantity <= 10) {
      const updatedFoodItems = [...foodItems];
      updatedFoodItems[index].quantity = quantity;
      updatedFoodItems[index].price = 10 * quantity; // Assuming price is $10 per serving
      setFoodItems(updatedFoodItems);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems.splice(index, 1);
    setFoodItems(updatedFoodItems);
  };
  const priceOfTables = {
    2: 100,
    4: 150,
    6: 200,
    8: 250,
    10: 300,
    25: 350,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let price = 0
    foodItems.forEach(food => {
        price += food.price
        delete food.price
    })
    price += priceOfTables[people]
    apiActions.createBooking({
        time, people, username: userState.username || 'system', price , foodItems
      })
      .then(res => {
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: `Your table has been booked for $${price}`,
            showConfirmButton: false,
            timer: 2500
          })
          setPeopleCount(2)
          setFoodItems([])
          setTime('1:00 PM')
        }
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: `Booking failed: ${err.response.data.message}`,
          showConfirmButton: true,
        })
      })
  };

  return (
    <div className="booking-page">
      <h2>Booking page here</h2>
      <form>
        <label>Booking Time:</label>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="10:00 PM">10:00 PM</option>
        </select>

        <label>Number of People:</label>
        <select value={people} onChange={(e) => setPeopleCount(e.target.value)}>
          <option value={2}>2</option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>

        <label>Food:</label>
<select value={selectedFood} onChange={handleFoodChange}>
  <option value="Pizza">Pizza</option>
  <option value="Sushi">Sushi</option>
  <option value="Burger">Burger</option>
  <option value="Salad">Salad</option>
  <option value="Pasta">Pasta</option>
  <option value="Steak">Steak</option>
</select>

        <button type="button" style={{ margin: '10px', padding: '12px' }} onClick={addFoodItem}>
          Add Food Item
        </button>

        {foodItems.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      placeholder="Quantity"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button type="button" onClick={() => handleDeleteItem(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button className="submit-button" disabled={people < 2 && time === '' && foodItems.length === 0}style={{ margin: '10px', padding: '12px' }} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Bookings;
