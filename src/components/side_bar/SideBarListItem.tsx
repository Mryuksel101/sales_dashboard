import { IconType } from 'react-icons';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

interface SideBarListItemProps {
    to: string;
    label: string;
    icon: IconType;
}

const SideBarListItem: React.FC<SideBarListItemProps> = ({ to, label, icon }) => {
    return (
        <li className="mb-2">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `flex items-center p-4 text-sm font-semibold tracking-tight rounded-full transition-colors duration-200 ${
                        isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-300'
                    }`
                }
                end
            >
                {icon({ className: 'mr-3' , size: 24})}
                {label}

            </NavLink>
        </li>
    );
}

export default SideBarListItem;
