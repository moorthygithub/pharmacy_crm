import { logout } from "@/store/auth/authSlice";
import { persistor } from "@/store/store";
import { LOGOUT } from "@/constants/apiConstants";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useAppLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trigger } = useApiMutation();

  const handleLogout = async () => {
    try {
      const res = await trigger({
        url: LOGOUT.logout,
        method: "POST",
      });
      if (res.code === 200) {
        localStorage.clear();

        await persistor.flush();

        dispatch(logout());

        navigate("/", { replace: true });

        setTimeout(() => {
          persistor.purge();
        }, 300);
      } else {
        toast.error("Failed to Logout");
      }
    } catch (error) {
      toast.error(error.message || "Failed to Logout");

      console.error("Logout failed:", error);
      // localStorage.clear();
      // dispatch(logout());
      // navigate("/", { replace: true });
      // persistor.purge();
    }
  };

  return handleLogout;
};

export default useAppLogout;
