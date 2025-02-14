import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useUserByEmployeeId } from '../../hooks/useUserByEmployeeId';
import { createEntity } from '../../services/crudService';
import StarReview from '../shared/rating/starReview';
import CommentBox from '../shared/commentBox/comments';
import { Collection } from '../../enums/collections.enum';
import Button from '../shared/button/button';
import { useCompanies } from '../../hooks/useCompanies';
import { useBranches } from '../../hooks/useBranches';
import { userRoles } from '../utils/userRoles';

const ReviewUser:React.FC = () => {
    const { employeeId } = useParams<{ employeeId?: string }>();
    const { user, loading, error } = useUserByEmployeeId(employeeId || '');
    const { companies, loading: loadingCompanies, error: errorCompanies } = useCompanies(user?.companyId);
    const { branches, loading: loadingBranches, error: errorBranches } = useBranches();
    

    // Validation schema
    const validationSchema = Yup.object({
        rating: Yup.number()
            .min(1, 'Rating must be at least 1 star')
            .max(5, 'Rating cannot exceed 5 stars')
            .required('Rating is required'),
        comment: Yup.string().required('Comment is required'),
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading user data</p>;
    if (!user) return <p>User not found</p>;

    // Find company and branch names
    const company = companies.find(c => c.id === user.companyId);
    const branch = branches.find(b => b.id === user.branchId);

    const userRole = userRoles.find(role => role.id === user.position);
    const roleLabel = userRole ? userRole.label : 'Unknown Position';

    return (
        <div>
            {user.image && <img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Company: {company?.name}</p>
            <p>Branch: {branch?.name}</p>
            <p>Position: {roleLabel}</p>
            <Formik
                initialValues={{
                    rating: 0,
                    comment: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        await createEntity(Collection.Reviews, {
                            employeeId,
                            rating: values.rating,
                            comment: values.comment,
                        });
                        alert('Review submitted successfully!');
                        resetForm();
                    } catch (error) {
                        console.error('Error submitting review:', error);
                    }
                }}
            >
                {({ handleSubmit, touched, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <StarReview 
                            name="rating" 
                            errorText={touched.rating && errors.rating} 
                        />
                        <CommentBox 
                            label="Your Comment" 
                            name="comment" 
                            required 
                        />
                        <Button 
                            type="submit" 
                            text="Submit Review" 
                            color="primary" 
                            variant="contained" 
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ReviewUser ;