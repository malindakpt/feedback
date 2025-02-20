/* eslint-disable */

import React from "react";
import AdminView from "./adminView";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import OwnerView from "./ownerView";
import ManagerView from "./managerView";
import EmployeeView from "./employeeView";
import { UserRoles } from "../../enums/userRoles";

const HomeViewContainer: React.FC = () => {
  const { user } = useAuthenticatedUser(); // Assume it returns loading state
  if (!user || !user.position) return <p>Unauthorized Access</p>; // Handle missing user

  switch (user.position) {
    case UserRoles.Admin:
      return <AdminView />;
    case UserRoles.Owner:
      return <OwnerView />;
    case UserRoles.Manager:
      return <ManagerView />;
    case UserRoles.Employee:
      return <EmployeeView />;
    default:
      return <p>Unauthorized Access</p>;
  }
};

export default HomeViewContainer;
