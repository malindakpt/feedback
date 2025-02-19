import { UserRoles } from "../../enums/userRoles";

export const userRoles = [
  { id: UserRoles.Owner, label: "Owner" },
  { id: UserRoles.Manager, label: "Manager" },
  { id: UserRoles.Employee, label: "Employee" },
];

export const getUserRoles = (id?: string): string => {
  const role = userRoles.find((role) => role.id === id);
  return role ? role.label : "Unknown Role"; // Default to "Unknown Role" if no match
};
