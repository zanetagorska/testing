const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COLLECTION_SUCCESS':
      return [...state, ...action.collections];
    case 'ADD_COLLECTION_SUCCESS':
      return [...state, action.collection];
    default:
      return state;
  }
};

export const fetchCollection = () => ({
  type: 'FETCH_COLLECTION',
});

export const addCollection = formValues => ({
  type: 'ADD_COLLECTION',
  formValues,
});
