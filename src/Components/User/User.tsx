import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const User: React.FC = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            const userId = 10;
            navigate(`/users/${userId}`);
        } 
    };

    return (
        <section>
            <div style={{ fontSize: 32, textAlign: "center", padding: 10 }}>Login</div>
            <div style={{ textAlign: "center", padding: 10 }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: 10 }}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: 10 }}
                />
                <br />
                <button onClick={handleLogin}>Login</button>
                
            </div>
        </section>
    )
}

export default User
