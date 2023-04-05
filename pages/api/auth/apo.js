import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials, req) {
                console.log('credentials:', credentials);
                const { username, password } = credentials;
                const payload = { username, password };


                const response = await axios.post("https://wifarmapi-production.up.railway.app/auth/login", payload, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log('response:', response);

                // const res = await fetch("https://wifarmapi-production.up.railway.app/auth/login", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify({
                //         username: credentials?.username,
                //         password: credentials?.password,
                //     }),

                // });
                // const user = await res.json();
                // console.log(user)
                
                // if (user) {
                //     // Any object returned will be saved in `user` property of the JWT
                //     return user;
                // } else {
                //     // If you return null then an error will be displayed advising the user to check their details.
                //     return null;

                //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                // }
            },
            callbackUrl: `/dashboard`,

        }),
    ],
    // callbacks: {
    //     async jwt({ token, user }) {
    //         return { ...token, ...user };
    //     },
    //     async session({ session, token, user }) {
    //         session.user = token;
    //         return session;
    //     },
    // },
    secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
    session: {
        strategy: 'jwt',
    }
});
