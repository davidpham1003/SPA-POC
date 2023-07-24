import { EditConfig, MappedComponentProperties } from "@adobe/aem-react-editable-components";
import React from "react";

interface NavigationModel extends MappedComponentProperties {
    item: [];
}

const NavigationEditConfig: EditConfig<NavigationModel> = {
    emptyLabel: 'Navigation Component',
    isEmpty: function (props: NavigationModel) {
        return !props || !props.item.length;
    }
}

function Navigation() {
    return ( <>
    
    </> );
}

export default Navigation;