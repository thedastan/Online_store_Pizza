// ACTION CREATOR
export const setSortBy = ({type, order}) => ({
  type: 'SET_SORT_BY',
  payload: {type, order},
});

export const setCategory = (catindex) => ({
  type: 'SET_CATEGORY',
  payload: catindex,
});
