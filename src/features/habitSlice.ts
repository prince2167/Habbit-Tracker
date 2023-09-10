import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface IHabit {
    id: number,
    title: string;
    startDate: string;
    endDate: string;
    goal: string;
    bgColor: string;
    status: string;
    label: string;
}

export interface HabitState {
    habits: IHabit[],
    trash: IHabit[],
    archive: IHabit[]
}



const initialState: HabitState = {
    habits: [{
        id: 1,
        title: 'Go to gym',
        startDate: '12-09-2023',
        endDate: '12-09-2030',
        goal: "5",
        bgColor: 'lightGreen',
        status: 'active',
        label: 'gym'
    }],
    trash: [],
    archive: []
}


export const habitSlice = createSlice({
    name: "habit",
    initialState,
    reducers: {
        createHabit: (state, action: PayloadAction<any>) => {
            const habit = {
                id: Math.random() * 1000,
                title: action.payload.title,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                goal: action.payload.goal,
                bgColor: action.payload.bgColor,
                status: action.payload.status,
                label: action.payload.label
            }
            state.habits.push(habit)
        },
        deleteHabit: (state, action: PayloadAction<any>) => {
            state.habits = state.habits.filter((habit: any) => habit?.id !== action.payload.id)
            state.archive = state.archive.filter((habit: any) => habit?.id !== action.payload.id)
            state.trash.push(action.payload)
        },
        restoreHabit: (state, action: PayloadAction<any>) => {
            state.trash = state.trash.filter((habit: any) => habit?.id !== action.payload.id)
            state.habits.push(action.payload)

        },
        archiveHabit: (state, action: PayloadAction<any>) => {
            state.habits = state.habits.filter((habit: any) => habit?.id !== action.payload.id)
            state.trash = state.trash.filter((habit: any) => habit?.id !== action.payload.id)
            state.archive.push(action.payload)

        },
        restoreArchiveHabit: (state, action: PayloadAction<any>) => {
            state.archive = state.archive.filter((habit: any) => habit?.id !== action.payload.id)
            state.habits.push(action.payload)

        }
    }
})

export const { createHabit, deleteHabit, archiveHabit, restoreHabit,restoreArchiveHabit} = habitSlice.actions

export default habitSlice.reducer