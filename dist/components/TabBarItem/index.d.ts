import React from 'react';
export type ITabBarItemType = {
    tintColor?: string;
    selectIcon?: string;
    normalIcon?: string;
    focused?: boolean;
    customize?: any;
};
declare const TabBarItem: React.FC<ITabBarItemType>;
export default TabBarItem;
