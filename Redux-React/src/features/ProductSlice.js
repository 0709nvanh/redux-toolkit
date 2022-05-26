import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, getListCate, list, remove, update } from "../api/product";

export const getProducts = createAsyncThunk (
    "product/getProducts",
    async () => {
        const { data } = await list()
        return data
    }
)

export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async (slug) => {
        const { data } = await remove(slug)
        return data
    }
)

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product) => {
        const { data } = await create(product)
        return data
    }
)

export const editProduct = createAsyncThunk(
    "product/editProduct",
    async (product) => {
        const { data } = await update(product)
        return data
    }
)

export const getRelated = createAsyncThunk(
    "products/getRelated",
    async (list) => {
        const { data } = await getListCate(list);
        return data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload
        }); 
        builder.addCase(getRelated.fulfilled, (state, action) => {
            state.value = action.payload
        }); 
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })
        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload: item)
        })
    }
})

export default productSlice.reducer