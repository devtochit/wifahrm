import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction < any > ("api/CallBegan");
export const apiCallSuccess = createAction < any > ("api/CallSuccess");
export const apiCallFailed = createAction < any > ("api/CallFailed");
