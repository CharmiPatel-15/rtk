import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk("createUser", async (data, rejectwithvalue)=> {
    const response = await fetch ("https://646ef86e09ff19b120865d72.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify(data)
    });

    try {

       const result = await response.json()
        return result;
    } catch (error) {
      return rejectwithvalue (error.response);
    }

})

export const userDetail = createSlice({
    name : "userDetail",
    initialState : {
         users : [],
         loading : false,
         error : null,
    },
         extraReducers : {
            [createUser.pending] : (state) => {
                state.loading = true;
            },
            [createUser.fulfilled] : (state, action) => {
                state.loading = false;
                state.users.push(action.payload)
            },
            [createUser.rejected] : (state, action) => {
                state.loading = false;
                state.users =action.payload;
            }

         }
    },
);

export default userDetail.reducer;