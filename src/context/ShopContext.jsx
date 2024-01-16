import React, { createContext, useState } from 'react'
import {AllProducts} from '../assets/data/AllProducts.jsx'

export const ShopContext = createContext(null)

const getDefaultCart = () =>  {
  let cart = {};
  for (let i = 1; i < AllProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItem, setCartItem] = useState(getDefaultCart())
  const [favorites, setFavorites] = useState([])
  const [displayProducts, setDisplayProducts] = useState(AllProducts);
  const [searchInput, setSearchInput] = useState("");
  const [sortProduct, setSortProduct] = useState("");


  const addToCart = (itemId) => { 
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeToCart = (itemId) => { 
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = AllProducts.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItem[item];
      }
     
    }
    return totalAmount;
    
  };
  
  const getItemCount = () => {
    let countItem = 0;
    for(const item in cartItem) {
      if (cartItem[item] > 0) {
        countItem += cartItem[item]
      }
    }
    return countItem
  }

  const addToFavorites = (itemId) => {
    setFavorites((prev) => [...prev, itemId])
  }

  const removeFromFavorites = (itemId) => {
    setFavorites((prev) => prev.filter((id) => id !== itemId))
  }

  const toggleFavorite = (itemId) => {
    if(favorites.includes(itemId)){
      removeFromFavorites(itemId)
    } else {
      addToFavorites(itemId)
    }
  }

  const searchProduct = () => {
    const newFilteredProducts = AllProducts.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setDisplayProducts(newFilteredProducts);
  };

  const clearSearch = () => {
    setSearchInput("");
    setDisplayProducts(AllProducts);
  };

  const setSortProducts = () => {
    let sortedProducts = [...displayProducts];

    if (sortProduct === "highestToLowest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortProduct === "lowestToHighest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortProduct === "") {
      sortedProducts = [...AllProducts];
    }

    setDisplayProducts(sortedProducts);
  };




  const contextValue = {
    AllProducts,
    addToCart,
    removeToCart,
    cartItem,
    totalCartAmount,
    getItemCount,
    favorites,
    toggleFavorite,
    setCartItem,
    displayProducts,
    setDisplayProducts,
    searchInput,
    setSearchInput,
    sortProduct,
    setSortProduct,
    searchProduct,
    clearSearch,
    setSortProducts
    
  };

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider