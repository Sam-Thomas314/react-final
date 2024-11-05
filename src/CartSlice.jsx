import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    calculatetotalcount: (state, action) => {
        let totalcount = 0;
        state.totalcount ++;
        console.log(totalcount);
    },
    //this works now!
    removeItem: (state, action, index) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        
    },

    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name)
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
            //this is why we can add the functionality to cartitem and not cart slice
            //we set the new cartitem quantity previosly, and this simply applies that

        }
    },

  },
});

export const {
     addItem, 
     removeItem, 
     updateQuantity, 
    } = CartSlice.actions;

export default CartSlice.reducer;
