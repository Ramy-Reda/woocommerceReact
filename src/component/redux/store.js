import { configureStore } from '@reduxjs/toolkit'
import appProduct from './addProduct'

export const store = configureStore({
    reducer: {
        product : appProduct,
    },
})
