import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkPermission } from "./permisssion";

const getStaticPermissions = () => {
  const { buttonPermissions } = useSelector((state) => state.permissions);
  try {
    return buttonPermissions ? JSON.parse(buttonPermissions) : [];
  } catch (error) {
    console.error(
      "Error parsing StaticPermission data from localStorage",
      error
    );
    return [];
  }
};
export const BuyerCreate = ({ onClick, className }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("id") || "";
  const staticPermissions = getStaticPermissions();
  if (!checkPermission(userId, "BuyerCreate", staticPermissions)) {
    return null;
  }

  return (
    <Button variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4" /> Buyer
    </Button>
  );
};
BuyerCreate.page = "Buyer";

export default {
  BuyerCreate,
};
