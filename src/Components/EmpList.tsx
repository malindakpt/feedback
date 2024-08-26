import React from "react";
import { Grid, Box } from "@mui/material";
import EmpImage from "./EmpImage";

interface EmpListProps {
    employees: {
        empId:string;
        empName: string;
        imageUrl: string;
    }[];

}

const EmpList: React.FC<EmpListProps> = ({ employees}) => {
    return (
        <Box padding="20px">
            <Grid container spacing={1}>
                {employees.map((employee) => (
                    <Grid item xs={8} sm={6} md={4} lg={2} key={employee.empId}>
                        <EmpImage
                            empId={employee.empId}
                            empName={employee.empName}
                            imageUrl={employee.imageUrl}
                            
                        />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default EmpList;