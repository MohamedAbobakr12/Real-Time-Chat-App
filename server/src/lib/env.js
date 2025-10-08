import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT, 
    MONGO_URI: process.env.MONGO_URI, 
    JWT_SECRET: process.env.JWT_SECRET, 
    NODE_ENV: process.env.NODE_ENV, 
    CLIENT_URL: process.env.CLIENT_URL, 
    RESEND_API_KEY: process.env.RESEND_API_KEY, 
    EMAIL_FORM: process.env.EMAIL_FORM, 
    EMAIL_FORM_NAME: process.env.EMAIL_FORM_NAME, 
};