import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

type TPayload = {
	id: string;
}

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
		removeItem: (state, action: PayloadAction<TPayload>) => {	
			const itemId = action.payload.id;
			state.cartItems = state.cartItems.filter(item => item.id !== itemId );
		},

		increase: (state, action: PayloadAction<TPayload>) => {
			const itemId = action.payload.id;
			const currentItem = state.cartItems.find(
				item => item.id === itemId
			);
			
			if(currentItem) {
				currentItem.amount = currentItem.amount + 1;
			}
		},

		decrease: (state, action: PayloadAction<TPayload>) => {
			const itemId = action.payload.id;
			const currentItem = state.cartItems.find(
				item => item.id === itemId
			);
			
			if(currentItem) {
				currentItem.amount = currentItem.amount - 1;
			}
		},

		calculateTotals: (state) => {
			let amountCalculated = 0;
			let totalCalculated = 0;

			state.cartItems.forEach(
				item => {
					amountCalculated = amountCalculated + item.amount;
					totalCalculated = totalCalculated + (item.amount * Number(item.price));
				}
			);

			state.amount = amountCalculated;
			state.total = totalCalculated;
		},

		clearCart: (state) => {
			state.cartItems = [];
		}
	}
});

// console.log(cartSlice);

export const { removeItem, clearCart, decrease, increase, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;