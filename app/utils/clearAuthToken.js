const clearAuthToken = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
};

export default clearAuthToken