import SideBarListItemModel from "../models/SideBarListItemModel";
import { MdHome, MdInfo, MdContactMail } from 'react-icons/md';
export const sideBarListItems: SideBarListItemModel[] = [
    new SideBarListItemModel('/', 'Home', MdHome),
    new SideBarListItemModel('/about', 'About', MdInfo),
    new SideBarListItemModel('/contact', 'Contact', MdContactMail)
];