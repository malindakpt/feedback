import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BranchView from "./branchView";
import { useBranchByBranchID } from "../../hooks/useBranchByBranchId";
import { useCompanyByCompanyID } from "../../hooks/useCompanyByCompanyId";

const BranchViewContainer: React.FC = () => {
    const { branchId } = useParams<{ branchId?: string }>();
    const bId = branchId ?? "";
    const { branch, loading, error } = useBranchByBranchID(bId);
    const [companyId, setCompanyId] = useState<string | null>(null);
    const { company } = useCompanyByCompanyID(companyId ?? "");

    useEffect(() => {
        if (branch) {
            setCompanyId(branch.companyId);
        }
    }, [branch]);

    // Handle loading and error states
    if (loading) return <p>Loading branch data...</p>;
    if (error) return <p>Error fetching branch data: {error}</p>;
    if (branch === null) {
        return <p>Branch not found</p>;
    }
    return <BranchView Branch={branch} company={company} />;


};

export default BranchViewContainer;
