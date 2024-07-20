import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface SideBarListItemProps {
    to: string;
    label: string;
    icon: IconType;
}

const SideBarListItem: React.FC<SideBarListItemProps> = ({ to, label, icon }) => {
    const isActive = useLocation().pathname === to;

    return (
        <li className="mb-3">
            <NavLink
                to={to}
                className={`flex items-center p-3 text-base rounded-3xl transition-colors duration-200 leading-tight ${isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-black hover:bg-gray-200 md:hover:bg-gray-100'
                    }`}
                end
            >
                <span className="mr-3">
                    {icon({ size: 20 })}
                </span>
                <span className="truncate">{label}</span>
            </NavLink>
        </li>
    );
}

export default SideBarListItem;
