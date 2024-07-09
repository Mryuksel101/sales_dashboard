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
            `hover:bg-gray-700 rounded-full block py-4 pl-4 pr-6 text-sm text-[#1C182B] font-semibold tracking-tight ${isActive ? 'bg-[#E8F0FE]' : ''}`
            }
            end
        >
            {label}
        </NavLink>
        </li>
    );
}

export default SideBarListItem;