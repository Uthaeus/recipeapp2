import { useState } from "react";
function Home() {
    const [message, setMessage] = useState(false);

    return (
        <div>
            <h1>Home</h1>
            {message && <p className="text-success">I've been clicked!</p>}
            <button className="btn btn-primary" onClick={() => setMessage(!message)}>Click me</button>
        </div>
    );
}

export default Home;