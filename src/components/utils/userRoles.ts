export const userRoles = [
  { id: "1", label: "Manager" },
  { id: "2", label: "Associate" },
  { id: "3", label: "Admin" },
  { id: "4", label: "Clerk" },
  { id: "5", label: "Trainee" },
];

export const getUserRoles = (id?: string): string => {
  const role = userRoles.find((role) => role.id === id);
  return role ? role.label : "Unknown Role"; // Default to "Unknown Role" if no match
};
