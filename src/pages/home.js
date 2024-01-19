
import { Link } from "react-router-dom";

import Sidebar from "../components/sidebar/sidebar";
import { DUMMY_DATA } from "../store/DUMMY_DATA";
import RecipeItem from "../components/recipe/recipeItem";

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
                        {DUMMY_DATA.map((recipe) => (
                            <RecipeItem
                                key={recipe.id}
                                title={recipe.title}
                                description={recipe.description}
                                time={recipe.time}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Home;