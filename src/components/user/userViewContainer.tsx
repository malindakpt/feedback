import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserByUId } from "../../hooks/useUserByUId";
import { useCompanyByCompanyID } from "../../hooks/useCompanyByCompanyId";
import UserView from "./userView";

const UserViewContainer: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const userId = id ?? "";

    const [companyId, setCompanyId] = useState<string | null>(null);
    const [branchId, setBranchId] = useState<string>("");

    const { user, loading, error } = useUserByUId(userId);
    const { company } = useCompanyByCompanyID(companyId ?? "");

    // Set companyId once user data is available
    useEffect(() => {
        if (user) {
            setCompanyId(user.companyId);
        }
    }, [user]);

    // Handle loading and error states
    if (loading) return <p>Loading user data...</p>;
    if (error) return <p>Error fetching user data: {error}</p>;
    if (user === null) {
        return <p>User not found</p>;
    }
    return (
        <UserView
            user={user}
            company={company}
            userId={userId}
            companyId={companyId ?? ""}
            branchId={branchId}
        />
    );
};

export default UserViewContainer;
