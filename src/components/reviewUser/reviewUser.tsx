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

const ReviewUser:React.FC = () => {
    const { employeeId } = useParams<{ employeeId?: string }>();

    // Call the hook even if employeeId is undefined
    const { user, loading, error } = useUserByEmployeeId(employeeId || '');

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

    return (
        <div>
            {user.image && <img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Company ID: {user.companyId}</p>
            <p>Branch ID: {user.branchId}</p>
            <p>Position: {user.position}</p>
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