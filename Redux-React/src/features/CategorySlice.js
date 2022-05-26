import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCate, listCate, removeCate, updateCate } from "../api/category";

export const getCategories = createAsyncThunk(
    "category/getCategories",
    async () => {
        const {data} = await listCate()
        return data
    }
)

export const removeCategory = createAsyncThunk(
    "category/removeCategory", 
    async (slug) => {
        const { data } = await removeCate(slug);
        return data
    }
)

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (category) => {
        const { data } = await createCate(category);
        return data
    }
)

export const updateCategory = createAsyncThunk(
    "category/updateCate", 
    async (category) => {
        const { data } = await updateCate(category);
        return data
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(removeCategory.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            console.log('action.payload', action.payload)
            state.value.push(action.payload)
        })
         builder.addCase(updateCategory.fulfilled, (state, action) => {
             state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
         })
    }
})

export default categorySlice.reducer