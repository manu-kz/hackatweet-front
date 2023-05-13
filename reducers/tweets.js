import { createSlice } from '@reduxjs/toolkit';

const initialState = {

   tweetlist: []
}

export const tweetSlice = createSlice({
	name: 'tweet',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.push(action.payload);
		console.log('action',action.payload)
	},
}});

export const { addTweet,  } = tweetSlice.actions;
export default tweetSlice.reducer;
