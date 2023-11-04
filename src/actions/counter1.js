export const increaseCounter = (counterId) => ({
    type: 'INCREASE_COUNTER',
    payload: counterId,
  });
  
  export const decreaseCounter = (counterId) => ({
    type: 'DECREASE_COUNTER',
    payload: counterId,
  });
  
  export const resetCounter = (counterId) => ({
    type: 'RESET_COUNTER',
    payload: counterId,
  });
  
  export const addCounter = (counterData) => ({
    type: 'ADD_COUNTER',
    payload: counterData,
  });
  
  export const removeCounter = (counterId) => ({
    type: 'REMOVE_COUNTER',
    payload: counterId,
  });
  