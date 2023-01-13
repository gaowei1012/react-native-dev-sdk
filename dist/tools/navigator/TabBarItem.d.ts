import React from 'react';
type tabBarItemType = {
    tintColor?: string;
    selectIcon?: string;
    normalIcon?: string;
    focused?: boolean;
};
declare const TabBarItem: React.FC<tabBarItemType>;
export { TabBarItem };
