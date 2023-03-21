// import NextAuth from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials"
// import { loginReceived, loginRequested, loginRequestFailed, logUserOut } from '../../../redux/slice/auth/AuthenticationSlice';
// import apiCallBegan from '../../../redux/apiActions';
// const { randomBytes } = require('crypto');
// const axios = require('axios');

// const secret = process.env.NEXTAUTH_SECRET || randomBytes(32).toString('hex');

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text', placeholder: 'Username' },
//         userPassword: { label: 'Password', type: 'password', placeholder: 'Password' },
//       },
//       async authorize(credentials) {
//         console.log('credentials:', credentials);
//         const { username, userPassword } = credentials;
//         const payload = { username, userPassword };
      
//         try {
//           // Call your backend API to perform authentication using axios
//           const response = await axios.post("https://wifarmapi-production.up.railway.app/auth/login", payload);
                             
//           // If authentication is successful, return the user data
//           const userData = response.data.user;
//           localStorage.setItem('userDetails', JSON.stringify(response.data));
//           console.log('userData:', userData)
//           return userData;
//         } catch (error) {
//           // If authentication fails, throw an error
//           const errorMessage = error.response ? error.response.data.error : 'Authentication failed';
//           throw new Error(errorMessage);
//         }
//       }
      
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       console.log('user:', user);
//       // Dispatch the loginReceived action when authentication is successful
//       const { dispatch } = this.options;
//       dispatch(loginReceived(user));
//       return true;
//     },
//     async signOut() {
//       // Dispatch the logUserOut action when the user logs out
//       const { dispatch } = this.options;
//       dispatch(logUserOut());
//       return true;
//     },
//     async jwt(token, user) {
//       // Pass accessToken and userData as properties of the tokentokentoken
//       if (user) {
//         token.accessToken = user.accessToken;
//         token.userData = user.userData;
//       }

//       return token;
//     },
//     async session(session, token) {
//       // Store the accessToken and userData in the session
//       session.accessToken = token.accessToken;
//       session.userData = token.userData;
//       return session;
//     },
//   },
//   secret: secret, // Add the secret value to the configuration
// });
