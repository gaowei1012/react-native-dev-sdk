import React from 'react';
export declare type ITabBarItemType = {
    tintColor?: string;
    selectIcon?: string;
    normalIcon?: string;
    focused?: boolean;
};
declare const TabBarItem: React.FC<ITabBarItemType>;
export default TabBarItem;
