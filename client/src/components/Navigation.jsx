import { Link, useLocation } from "react-router-dom";

export function Navigation() {
    const location = useLocation();
  // Solo muestra "Create Task" cuando la URL es EXACTAMENTE "/tasks"
    const showCreateLink = location.pathname === "/tasks";
    return (
    <div className="flex justify-between py-3">
        <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
        </Link>
        {showCreateLink && (
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to="/tasks-create">Create Task</Link>
        </button>
        )}
    </div>
    );
}