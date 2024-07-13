import SideBarListItemModel from "../models/SideBarListItemModel";
import { CiHome, CiCircleInfo, CiMail } from 'react-icons/ci';
export const sideBarListItems: SideBarListItemModel[] = [
    new SideBarListItemModel('/home', 'Home', CiHome),
    new SideBarListItemModel('/about', 'About', CiCircleInfo),
    new SideBarListItemModel('/contact', 'Contact', CiMail)
];