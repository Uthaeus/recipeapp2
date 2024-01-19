
import { Link } from "react-router-dom";
function Home() {
    const [message, setMessage] = useState(false);

    return (
        <div className="home">
            <div className="home-left">
                <div className="home-header">
                    <h1 className="home-header-title">Home</h1>
                    <Link to='/' className="home-header-new-link">Create New Recipe</Link>
                </div>

                <div className="home-recipes">
                    <h1 className="home-recipes-title">Recipes</h1>

                    <div className="home-recipes-list">
                        <Link to='/' className="home-recipes-list-item">Recipe 1</Link>
                        <Link to='/' className="home-recipes-list-item">Recipe 2</Link>
                        <Link to='/' className="home-recipes-list-item">Recipe 3</Link>
                    </div>
                </div>
            </div>

            {/* sidebar */}
        </div>
    );
}

export default Home;