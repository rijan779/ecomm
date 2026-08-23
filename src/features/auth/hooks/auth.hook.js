import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { login, register,userData } from "../services/services";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be associated with AuthProvider");
    }

    const { user, setUser, loading, setLoading } = context;

    const handleRegister = async ({ firstName, lastName, email, password }) => {
        setLoading(true);
        try {
            const data = await register({ firstName, lastName, email, password });
            if (data?.user) {
                setUser(data.user);
            }
            return data;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const data = await login({ email, password });
            if (data?.user) {
                setUser(data.user);
            }
            return data;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };
    


    

    return { user, setUser, loading, setLoading, handleLogin, handleRegister };
};

