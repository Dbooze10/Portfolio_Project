import {useState} from 'react';

export default function SignupPage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    async function signup(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            hearders: {'Content-Type':'application/json'}
        });
        if (response.status === 200) {
            alert('sign up successful');
        } else {
            alert('sign up failed');
        }
    }
    return (
        <form className="signup" onSubmit = {signup}>
            <h1>Sign-Up</h1>
            <input type="text" placeholder="username" value = {username} onChange = {ev => setUsername(ev.target.value)} />
            <input type="password" placeholder="password" value = {password} onChange = {ev => setPassword(ev.target.value)} />
            <button>Sign-Up</button>
        </form>
    );
}