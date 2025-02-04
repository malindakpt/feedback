import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EmployeeState {
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  isLoading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, setSuccess, setError } = employeeSlice.actions;
export default employeeSlice.reducer;