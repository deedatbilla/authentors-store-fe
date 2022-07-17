const createSetter =
  subSlice =>
  (state, { payload }) => ({
    ...state,
    [subSlice]: payload,
  });

export { createSetter };
