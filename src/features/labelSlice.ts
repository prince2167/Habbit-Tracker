import { ILabels } from "@/app/labels/page"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface labelState {
    labels: ILabels[]
}

const initialState: labelState = {
    labels: [{
        id: 1,
        label: "hello"
    }]
}

export const labelSlice = createSlice({
    name: "label",
    initialState,
    reducers: {
        createLabels: (state, action: PayloadAction<ILabels>) => {
            state.labels.push(action.payload)
        },

        removeLabel: (state, action: PayloadAction<any>) => {
            state.labels = state.labels.filter((label) => label.id !== action.payload)

        }
    }


})

export const { createLabels, removeLabel } = labelSlice.actions

export default labelSlice.reducer