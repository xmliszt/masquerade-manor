import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Google OAuth Provider
const googleClientID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const googleProvider = GoogleProvider({
  clientId: googleClientID,
  clientSecret: googleClientSecret,
});

export const authOptions = {
  providers: [googleProvider],
};

export default NextAuth(authOptions);
