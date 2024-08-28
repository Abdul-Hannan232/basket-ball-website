import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { socialMediaLogin } from '../../../services/authServices';
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        user.type="social";
        user.password = "12345678";
        user.confirm_password = "12345678";
        delete user.id;

        try {
          const response = await socialMediaLogin(user);
          if (response.status === 200 && response.data?.data?.token) {
            token = {
              ...token,
              authToken: response.data.data.token,
            };
            
          } else {
            console.error("API did not return a token as expected.");
          }
        } catch (error) {
          console.error("Error during user signup or login:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session = {
        ...session,
        authToken: token.authToken || null,
        accessToken: token.accessToken, // Optional
      };
      
      return session; 
    },
  },
});

export { handler as GET, handler as POST };
