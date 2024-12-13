// Role-Permission Mapping
export const rolePermissions: Record<string, string[]> = {
    Admin: ["Create Company", "Approve Branch Manager", "Approve Employee", "Add Feedback", "View Feedback", "Manage Users", "View Profile"],
    Company_Owner: ["Approve Branch Manager", "Approve Employee", "Add Feedback", "View Feedback", "Manage Users", "View Profile"],
    Branch_Manager: ["Approve Employee", "Add Feedback", "View Feedback", "View Profile"],
    Employee: ["Add Feedback", "View Feedback", "View Profile"]
  };
  
  // Function to Check Permission
  export function hasPermission(role: string, action: string): boolean {
    const permissions = rolePermissions[role];
    return permissions ? permissions.includes(action) : false;
  }
  