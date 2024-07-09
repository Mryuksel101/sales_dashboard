class SideBarListItemModel {
    to: string;
    label: string;
    icon: string = '';

    constructor(to: string, label: string) {
        this.to = to;
        this.label = label;
        this.icon = '';
    }
}

export default SideBarListItemModel;