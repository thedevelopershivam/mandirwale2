import axios from "axios";
import NextAuth from "next-auth";
import { NextResponse } from "next/server"
import Credentials from "next-auth/providers/credentials";


const authOption = {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const { email, password } = credentials;
                    const response = await axios.post("http://localhost:8000/api/v1/admin/login-user", { email, password });


                    
                    const userVal = response?.data?.data;
                    const sendingData = {
                        name: userVal.name,
                        email: userVal.email,
                        role: userVal.role,
                        token: response?.data?.token
                    }

                    localStorage.setItem("token", response?.data?.token)

                    if (userVal) {
                        const userData = {
                            ...response?.data?.data,
                            token: response?.data?.token
                        };

                        
                        return sendingData;
                    }
                }
                catch (error) {
                    if (error.response && error.response.data) {
                        throw new Error(error.response.data.errors);
                    } 
                }
            },
        }),
    ],
    seceret: process.env.SECRET,
    // if required
    session: { strategy: "jwt",  },

    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
