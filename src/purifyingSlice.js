import { createSlice } from "@reduxjs/toolkit";

export const purifyingSlice = createSlice({
    name: "purifyingSlice",
    initialState: [
        {
            name: "Snake Plant",
            image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
            description: "Produces oxygen at night, improving air quality.",
            cost: "$15"
        },
        {
            name: "Spider Plant",
            image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
            description: "Filters formaldehyde and xylene from the air.",
            cost: "$12"
        },
        {
            name: "Peace Lily",
            image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
            description: "Removes mold spores and purifies the air.",
            cost: "$18"
        },
        {
            name: "Boston Fern",
            image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
            description: "Adds humidity to the air and removes toxins.",
            cost: "$20"
        },
        {
            name: "Rubber Plant",
            image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
            description: "Easy to care for and effective at removing toxins.",
            cost: "$17"
        },
        {
            name: "Aloe Vera",
            image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
            description: "Purifies the air and has healing properties for skin.",
            cost: "$14"
        }
    ],
    reducers: {
        incrementpurifyingQuantity: (state, action ) => {
            const item = state[action.payload];
            if(item) {
                item.quantity ++; 
            }
        },
        decrementpurifyingQuantity: (state, action) => {
            const item = state[action.payload];
            if(item[index] && item[index].quantity >0) {
                item.quantity --;
            }
        },
    },
});

export const {incrementpurifyingQuantity, decrementpurifyingQuantity} = purifyingSlice.actions;

export default purifyingSlice.reducer;