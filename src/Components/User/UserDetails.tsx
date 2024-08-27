import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    console.log("Users details", id)

    return (
        <div style={{ fontSize: 32, textAlign: "center", padding: 10 }}>
            UserId - {id}
        </div>
    );
}

export default UserDetails
