export default {
    providers: [
        {
            id: 'custom',
            name: 'Custom',
            type: 'credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                // Call your backend API to perform authentication
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                });

                // If authentication is successful, return the user data
                if (response.ok) {
                    const data = await response.json();
                    return data.user;
                }

                // If authentication fails, throw an error
                const error = new Error('Authentication failed');
                error.status = response.status;
                throw error;
            }
        }
    ]
};
