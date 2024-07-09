import { IconType } from "react-icons";
class SideBarListItemModel {
    to: string;
    label: string;
    icon: IconType;

    constructor(to: string, label: string, icon: IconType) {
        this.to = to;
        this.label = label;
        this.icon = icon;
    }
}

export default SideBarListItemModel;