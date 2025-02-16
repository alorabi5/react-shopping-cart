// src/components/Shop/Shop.jsx

import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList";
import { useState } from "react";

import "./Shop.css";

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  // src/components/Shop/Shop.jsx

  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item]);
    setShopInventory(shopInventory.filter((el) => el._id !== item._id));
  };

  const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item]);
    setUserInventory(userInventory.filter((el) => el._id !== item._id));
  };

  // src/components/Shop/Shop.jsx

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList
          title="Shop Inventory"
          inventory={shopInventory}
          handleAddItem={handleAddItem}
        />
        <InventoryList
          title="User Inventory"
          inventory={userInventory}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  );
};

export default Shop;
