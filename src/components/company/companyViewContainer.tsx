import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCompanyByCompanyID } from "../../hooks/useCompanyByCompanyId";
import CompanyView from "./companyView";

const CompanyViewContainer: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const companyId = id ?? "";

    const { company, loading, error } = useCompanyByCompanyID(companyId);

    // Handle loading and error states
    if (loading) return <p>Loading company data...</p>;
    if (error) return <p>Error fetching company data: {error}</p>;
    if (company === null) {
        return <p>Company not found</p>;
    }
    return <CompanyView company={company} />;


};

export default CompanyViewContainer;
