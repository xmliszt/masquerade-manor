import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import Auth0Provider from 'next-auth/providers/auth0';

// Google OAuth Provider
const googleClientID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const googleProvider = GoogleProvider({
  clientId: googleClientID,
  clientSecret: googleClientSecret,
});

// Facebook OAuth Providers
const facebookClientID = process.env.FACEBOOK_OAUTH_CLIENT_ID;
const facebookClientSecret = process.env.FACEBOOK_OAUTH_CLIENT_SECRET;
const facebookProvider = FacebookProvider({
  clientId: facebookClientID,
  clientSecret: facebookClientSecret,
});

export const authOptions = {
  providers: [googleProvider, facebookProvider],
};

export default NextAuth(authOptions);
