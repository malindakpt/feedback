import React, { useMemo } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { useFetchBranches } from "../../../hooks/useBranchesByComapnyId";
import { Branch } from "../../../interfaces/entities/branch";
import AutoCompleteInput from "../autoComplete/autoCompleteInput";
interface BranchSelectorProps {
    companyId: string;
    onChange: (field: string, value: string | null) => void;
    required?: boolean;
    disabled?: boolean;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({
    companyId,
    onChange,
    required = false,
    disabled = false,
}) => {
    const { branches, loading } = useFetchBranches(companyId);

    const branchOptions = useMemo(
        () =>

            branches.map((branch: Branch) => ({
                label: branch.name,
                id: branch.id,

            })),
        // branches.map((branch: Branch) => {
        //     const ret: AutoCompleteOption = {
        //         label: branch.name,
        //         id: branch.id,
        //     }
        //     return ret;
        // }),
        [branches]
    );

    return (
        <AutoCompleteInput
            label="Branch"
            name="branchId"
            options={branchOptions}
            onChange={onChange}
            required={required}
            disabled={disabled || loading || !companyId}
        />

    );
};

export default BranchSelector;