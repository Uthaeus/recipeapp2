
function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className="sidebar-title">Sort by Category</h1>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">Category 1</li>
                <li className="sidebar-list-item">Category 2</li>
                <li className="sidebar-list-item">Category 3</li>
                <li className="sidebar-list-item">Category 4</li>
                <li className="sidebar-list-item">Category 5</li>
            </ul>

            <h1 className="sidebar-title">Sort by Main Ingredient</h1>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">Main Ingredient 1</li>
                <li className="sidebar-list-item">Main Ingredient 2</li>
                <li className="sidebar-list-item">Main Ingredient 3</li>
                <li className="sidebar-list-item">Main Ingredient 4</li>
                <li className="sidebar-list-item">Main Ingredient 5</li>
            </ul>
        </div>
    );
}

export default Sidebar;