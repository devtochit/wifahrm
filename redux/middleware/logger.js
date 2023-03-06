const logger = (param) => (store) => (next) => (action) => {
    console.log("Logger", param);
    next(action);
};

export default logger;
