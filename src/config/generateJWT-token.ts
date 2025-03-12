
import jwt from "jsonwebtoken"

const JWT_SECRET  = process.env.JWT_SECRET || "iamverysecret"
export const generateJwtToken = (userId: string, email :string) => {
    return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: "1h" });
};