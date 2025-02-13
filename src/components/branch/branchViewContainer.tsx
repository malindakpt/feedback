import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BranchView from "./branchView";
import { useBranchByBranchID } from "../../hooks/useBranchByBranchId";

const BranchViewContainer: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const branchId = id ?? "";

    const { branch, loading, error } = useBranchByBranchID(branchId);

    // Handle loading and error states
    if (loading) return <p>Loading branch data...</p>;
    if (error) return <p>Error fetching branch data: {error}</p>;
    if (branch === null) {
        return <p>Branch not found</p>;
    }
    return <BranchView Branch={branch} />;


};

export default BranchViewContainer;
