import React, { useState } from 'react';
import "./Navbar.css";
import mainCourseData from './Main CourseData.json';

const MainCourse = ({ onPriceUpdate }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [itemQuantity, setItemQuantity] = useState({});

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const addItem = (itemId, price) => {
    setItemQuantity(prevState => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) + 1
    }));
    onPriceUpdate((prevPrice) => prevPrice + parseFloat(price));
  };

  const removeItem = (itemId, price) => {
    if (itemQuantity[itemId] > 0) {
      setItemQuantity(prevState => ({
        ...prevState,
        [itemId]: prevState[itemId] - 1
      }));
      onPriceUpdate((prevPrice) => prevPrice - parseFloat(price));
    }
  };

  return (
    <div className="container">
      <div id="MainCourse">
        {mainCourseData.map((course) => (
          <div key={course.id}>
            <h3 className={`fw-bold categoryName ${isCategoryOpen ? 'open' : ''}`} onClick={toggleCategory}>{course.categoryName}</h3>
            {isCategoryOpen && (
              <div>
                {course.items.map((item) => (
                  <div className="menuItem" key={item.id}>
                    <div className="itemDetails">
                      <div className="itemTypeMeta">
                        <img src={item.meta.image} alt={item.meta.type} className={item.meta.type.toLowerCase()} />
                        <span className="itemMeta">{item.meta.tag}</span>
                      </div>
                      <p className="itemName">{item.name}</p>
                      <p className="itemDescription">{item.description}</p>
                      <p className="itemPrice">{item.price}</p>
                    </div>
                    <div className="itemImageBuy">
                      <img loading="lazy" className="itemImage" src={item.image} alt={item.name} />
                      <span className="btn-add">
                        {itemQuantity[item.id] > 0 ? (
                          <div className="QtyBtn">
                            <button className="btn-qty" onClick={() => removeItem(item.id, item.price)}>–</button>
                            <span className="qty">{itemQuantity[item.id]}</span>
                            <button className="btn-qty" onClick={() => addItem(item.id, item.price)}>+</button>
                          </div>
                        ) : (
                          <div className="AddBtn">
                            <button onClick={() => addItem(item.id, item.price)} className="add-btn">ADD</button>
                          </div>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCourse;
