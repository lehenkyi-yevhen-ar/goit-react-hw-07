import { createSlice } from "@reduxjs/toolkit"
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from "./contactsOps"

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
}

const slice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload)
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       (item) => item.id !== action.payload
  //     )
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action) => {
          state.items = action.payload
        }
      )
      .addCase(
        deleteContacts.fulfilled,
        (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          )
        }
      )
      .addCase(
        addContacts.fulfilled,
        (state, action) => {
          state.items.push(action.payload)
        }
      )
  },
})

export const contactsReducer = slice.reducer

// export const { addContact, deleteContact } =
//   slice.actions

export const selectContacts = (state) =>
  state.contacts.items
