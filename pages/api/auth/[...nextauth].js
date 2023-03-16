import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import { loginReceived, loginRequested, loginRequestFailed, logUserOut } from '../../../redux/slice/auth/AuthenticationSlice';
import apiCallBegan from '../../../redux/apiActions';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        userPassword: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials) {
        console.log(credentials)
        const { username, userPassword } = credentials;
        const payload = { username, userPassword };
        try {
          // Call your backend API to perform authentication
          const response = await apiCallBegan({
            url: '/auth/login',
            method: 'post',
            data: payload,
            onStart: loginRequested.type,
            onSuccess: loginReceived.type,
            onError: loginRequestFailed.type,
          });

          // If authentication is successful, return the user data
          const userData = response.payload.data.user;
          localStorage.setItem('userDetails', JSON.stringify(response.payload));

          return userData;
        } catch (error) {
          // If authentication fails, throw an error
          const errorMessage = error.response ? error.response.data.error : 'Authentication failed';
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Dispatch the loginReceived action when authentication is successful
      const { dispatch } = this.options;
      dispatch(loginReceived(user));
      return true;
    },
    async signOut() {
      // Dispatch the logUserOut action when the user logs out
      const { dispatch } = this.options;
      dispatch(logUserOut());
      return true;
    },
    async jwt(token, user) {
      // Pass accessToken and userData as properties of the tokentokentoken
      if (user) {
        token.accessToken = user.accessToken;
        token.userData = user.userData;
      }

      return token;
    },
    async session(session, token) {
      // Store the accessToken and userData in the session
      session.accessToken = token.accessToken;
      session.userData = token.userData;
      return session;
    },
  },
});
