import axios from "axios";
import * as actions from "../apiActions";

const api =
    ({ dispatch }) =>
        (next) =>
            async (action) => {
                if (action.type !== actions.apiCallBegan.type) return next(action);
                const {
                    url,
                    data,
                    params,
                    onSuccess,
                    onError,
                    onStart,
                    method,
                    extraheaders,
                } = action.payload;

                if (onStart) dispatch({ type: onStart });

                next(action);
                try {
                    const response = await axios.request({
                        method,
                        baseURL: "https://wifarmapi-production.up.railway.app/",
                        url,
                        params: params,
                        data,
                        headers: {
                            // "concontent-typetent-type": "application/json",
                            Authorization: extraheaders,
                        },
                    });


                    dispatch(actions.apiCallSuccess(response.data));
                    console.log("res: ", response);
                    // Specific
                    if (onSuccess) {
                        dispatch({ type: onSuccess, payload: response.data });
                        // window.location.reload()
                    }
                } catch (error) {
                    // Default
                    dispatch(actions.apiCallFailed(error));

                    // Specific
                    if (onError) dispatch({ type: onError, payload: error });
                }
            };

export default api;
