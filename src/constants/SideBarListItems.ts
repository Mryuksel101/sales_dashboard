import SideBarListItemModel from "../models/SideBarListItemModel";
import { CiHome, CiCircleInfo, CiMail } from 'react-icons/ci';

export const sideBarListItems: SideBarListItemModel[] = [
    new SideBarListItemModel('/home', 'Ana Sayfa', CiHome),
    new SideBarListItemModel('/about', 'Hakkında', CiCircleInfo),
    new SideBarListItemModel('/contact', 'İletişim', CiMail)
];
