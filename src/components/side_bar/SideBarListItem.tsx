import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
interface SideBarListItemProps {
    to: string;
    label: string;
}
const SideBarListItem: React.FC<SideBarListItemProps> = ({to, label}) => {
    return (
        <li className="mb-2">
        <NavLink
            to={to}
            className={({ isActive }) =>
            `hover:bg-gray-700 p-2 rounded-xl block  ${isActive ? 'bg-gray-700' : ''}`
            }
            end
        >
            {label}
        </NavLink>
        </li>
    );
}

export default SideBarListItem;