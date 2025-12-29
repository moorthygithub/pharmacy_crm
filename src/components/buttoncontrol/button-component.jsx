import { Button } from "@/components/ui/button";
import { Edit, SquarePlus } from "lucide-react";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { checkPermission } from "./permisssion";

export const BuyerCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "BuyerCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Buyer
    </Button>
  );
});

BuyerCreate.page = "Buyer";

export const EditBuyer = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "EditBuyer", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      onClick={onClick}
      className={className}
      ref={ref}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});
EditBuyer.page = "Buyer";
//////// MASTER – Bag Type
export const BagTypeCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "BagTypeCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Bag Type
    </Button>
  );
});

BagTypeCreate.page = "Bag Type";
export const BagTypeEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "BagTypeEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      onClick={onClick}
      className={className}
      ref={ref}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

BagTypeEdit.page = "Bag Type";
/////// MASTER – Bank Create
export const BankCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "BankCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Bank
    </Button>
  );
});

BankCreate.page = "Bank";

/////// MASTER – Bank Edit
export const BankEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "BankEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

BankEdit.page = "Bank";
/////// MASTER – Container Size
export const ContainerSizeCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (
    !checkPermission(String(userId), "ContainerSizeCreate", buttonPermissions)
  ) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Container Size
    </Button>
  );
});

ContainerSizeCreate.page = "Container Size";

/////// MASTER – Container Size
export const ContainerSizeEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (
    !checkPermission(String(userId), "ContainerSizeEdit", buttonPermissions)
  ) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

ContainerSizeEdit.page = "Container Size";
/////// MASTER – Country Create
export const CountryCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "CountryCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Country
    </Button>
  );
});

CountryCreate.page = "Country";

/////// MASTER – Container Size
export const CountryEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "CountryEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

CountryEdit.page = "Country";
/////// MASTER – GR Code
export const GRCodeCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "GRCodeCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Gr Code
    </Button>
  );
});

GRCodeCreate.page = "Gr Code";

/////// MASTER – Gr Code
export const GRCodeEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "GRCodeEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

GRCodeEdit.page = "Gr Code";
/////// MASTER – Marking
export const MarkingCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "MarkingCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Marking
    </Button>
  );
});

MarkingCreate.page = "Marking";

/////// MASTER – Marking
export const MarkingEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "MarkingEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

MarkingEdit.page = "Marking";
/////// MASTER – Order Type
export const OrderTypeCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "OrderTypeCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Order Type
    </Button>
  );
});

OrderTypeCreate.page = "Order Type";

/////// MASTER – Order Type
export const OrderTypeEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "OrderTypeEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

OrderTypeEdit.page = "Order Type";
/////// MASTER – Payment Term
export const PaymentTermCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (
    !checkPermission(String(userId), "PaymentTermCreate", buttonPermissions)
  ) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Payment Term
    </Button>
  );
});

PaymentTermCreate.page = "Payment Term";

/////// MASTER – Payment Term
export const PaymentTermEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "PaymentTermEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

PaymentTermEdit.page = "Payment Term";
/////// MASTER – Port of Loading
export const PortofLoadingCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (
    !checkPermission(String(userId), "PortofLoadingCreate", buttonPermissions)
  ) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Port of Loading
    </Button>
  );
});

PortofLoadingCreate.page = "Port of Loading";

/////// MASTER – PortofLoading
export const PortofLoadingEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (
    !checkPermission(String(userId), "PortofLoadingEdit", buttonPermissions)
  ) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

PortofLoadingEdit.page = "Port of Loading";
/////// MASTER – Port of Loading
export const PreRecepitCreate = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "PreRecepitCreate", buttonPermissions)) {
    return null;
  }

  return (
    <Button ref={ref} variant="default" className={className} onClick={onClick}>
      <SquarePlus className="h-4 w-4 mr-2" />
      Pre Recepit
    </Button>
  );
});

PreRecepitCreate.page = "Pre Recepit";

/////// MASTER – PortofLoading
export const PreRecepitEdit = forwardRef(({ onClick, className }, ref) => {
  const userId = useSelector((state) => state.auth.user?.id);
  const buttonPermissions = useSelector(
    (state) => state.permissions.buttonPermissions
  );

  if (!checkPermission(String(userId), "PreRecepitEdit", buttonPermissions)) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={onClick}
      className={className}
      variant="ghost"
      size="icon"
    >
      <Edit className="h-4 w-4 text-black" />
    </Button>
  );
});

PreRecepitEdit.page = "Pre Recepit";
export default {
  BuyerCreate,
  EditBuyer,
  BagTypeCreate,
  BagTypeEdit,
  BankCreate,
  BankEdit,
  ContainerSizeCreate,
  ContainerSizeEdit,
  CountryCreate,
  CountryEdit,
  GRCodeCreate,
  GRCodeEdit,
  MarkingCreate,
  MarkingEdit,
  OrderTypeCreate,
  OrderTypeEdit,
  PaymentTermCreate,
  PaymentTermEdit,
  PortofLoadingCreate,
  PortofLoadingEdit,
  PreRecepitCreate,
  PreRecepitEdit,
};
