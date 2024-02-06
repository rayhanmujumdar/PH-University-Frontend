import { jwtDecode } from "jwt-decode";

export function verifyToken(token: string) {
    return jwtDecode(token)
}
