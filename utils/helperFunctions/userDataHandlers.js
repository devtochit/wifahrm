export const retrieveUserDetails = () => {
    try {
        const userDetails = localStorage.getItem('userDetails');
        return userDetails ? JSON.parse(userDetails) : null;
    } catch (error) {
        console.error('An error occurred while retrieving user details:', error);
        return null;
    }
};

export const storeUserDetails = (userDetails) => {
    try {
        const jsonValue = JSON.stringify(userDetails);
        localStorage.setItem('userDetails', jsonValue);
    } catch (error) {
        console.error('An error occurred while storing user details:', error);
    }
};
