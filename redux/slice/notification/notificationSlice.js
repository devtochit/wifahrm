import { createSlice } from "@reduxjs/toolkit";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { apiCallBegan } from "../../apiActions";


const initialState = {
    NotificationData: [{
        "cropCategory": "Fruits",
        "cropName": "Apple",
        "hasRead": true,
        "id": 0,
        "notificationTime": "2023-04-03T21:05:00.647Z",
        "taskCategory": "Fertilizer",
        "taskDescription": "Apply Fertilizer"
    },
    {
        "cropCategory": "Fruits",
        "cropName": "Apple",
        "hasRead": false,
        "id": 1,
        "notificationTime": "2023-04-02T20:44:25.647Z",
        "taskCategory": "Fertilizer",
        "taskDescription": "Apply Fertilizer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        "cropCategory": "Fruits",
        "cropName": "Apple",
        "hasRead": false,
        "id": 2,
        "notificationTime": "2023-04-02T20:44:25.647Z",
        "taskCategory": "Fertilizer",
        "taskDescription": "Apply Fertilizer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        "cropCategory": "Fruits",
        "cropName": "Apple",
        "hasRead": false,
        "id": 3,
        "notificationTime": "2023-04-02T20:44:25.647Z",
        "taskCategory": "Fertilizer",
        "taskDescription": "Apply Fertilizer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    }],
};

const notificationSlice = createSlice({
    name: "notificationSlice",

    initialState,
    reducers: {
        readNotification: (state, action) => {
            const { id, dispatch } = action.payload;
            const index = state.NotificationData.findIndex((item) => item.id === id);
            console.log({ index, id })
            state.NotificationData[index].hasRead = true;
            markNotificationAsRead(id, dispatch);
        },

        getNotification: (state, action) => { }
    },
});

const markNotificationAsRead = async (id, dispatch) => {
    const getToken = await retrieveUserDetails();

    if (getToken && getToken.data.jwtToken) {
        const token = getToken.data.jwtToken;
        dispatch(apiCallBegan({
            url: `api/notification/markasread/`,
            extraheaders: "jwtToken" + token,
            method: "post",
            onStart: console.log("Marking notification as read"),
            onSuccess: console.log("Successfully marked notification as read"),
            onError: console.log("Error marking notification as read"),
        }))
    }
}


export const { readNotification } = notificationSlice.actions;


export default notificationSlice.reducer;
