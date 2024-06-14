import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
	cartItems,
	amount: 4,
	total: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		removeItem: (state, action: PayloadAction<string>) => {	
			state.cartItems = state.cartItems.filter(item => item.id !== action.payload );
		},
		clearCart: (state) => {
			state.cartItems = [];
		}
	}
});

// console.log(cartSlice);

export const { removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;