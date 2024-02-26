import dotenv from 'dotenv'

dotenv.config()

const config = {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://admin:admin@stack-overflow-clone.qqxpboz.mongodb.net/",
    JWT_SECRET: process.env.JWT_SECRET
}

export default config;