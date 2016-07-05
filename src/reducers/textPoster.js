const textPoster = (state = null, action) => {
	switch (action.type) {
		case 'POST':
			return action.payload
	}

	return state;
}

export default textPoster