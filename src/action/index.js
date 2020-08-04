import { createAction } from "@reduxjs/toolkit";

export const addItemAction = createAction("ADDITEM",(value) =>({
    itemValue: value
}))

export const deleteItemAction = createAction("DELETEITEM",(value) =>({
    index: value
}))
