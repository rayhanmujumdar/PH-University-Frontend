import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentToken } from "../../redux/features/auth/authSelector";
import { useAppSelector } from "../../redux/hooks";
export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const token = useAppSelector(useCurrentToken)
    const location = useLocation()
    if (!token) {
        return <Navigate to='/login' replace state={location} />
    }
    return children

}