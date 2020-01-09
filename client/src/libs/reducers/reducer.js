export default ( state, action ) => {
  switch (action.type) {
    case 'add-user':
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload,
        }
      ]
      
    default: 
      return state
  }
} 