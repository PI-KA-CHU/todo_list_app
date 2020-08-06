import { createAction } from "@reduxjs/toolkit";

export const loadingOn = createAction("LOADINGON",() =>({
    loading: true
}))

export const loadingOFF = createAction("LOADINGOFF",() =>({
    loading: false
}))