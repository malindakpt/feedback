import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import { UserRoles } from '../enums/userRoles';
import { useBranchByBranchID } from '../hooks/useBranchByBranchId';

const BranchAccess: React.FC = () => {
    const { branchId } = useParams<{ branchId?: string }>();
    const { user } = useAuthenticatedUser();
    const { branch } = useBranchByBranchID(branchId ?? '');

    if (user) {
        if (user.position === UserRoles.Admin || user.position === UserRoles.Owner || user.position === UserRoles.Manager) {
            if (user.position === UserRoles.Admin) {
                return <Outlet />;
            } else {
                if (user.position === UserRoles.Owner) {
                    if (branch?.companyId === user.companyId) {
                        return <Outlet />;
                    } else {
                        return <Navigate to="/not-authorized" />;
                    }
                } else {
                    if (user.branchId === branchId) {
                        return <Outlet />;
                    } else {
                        return <Navigate to="/not-authorized" />;
                    }
                }
            }
        } else {
            return <Navigate to="/not-authorized" />;
        }
    } else {
        return <Navigate to="/not-authorized" />;
    }
};

export default BranchAccess;
