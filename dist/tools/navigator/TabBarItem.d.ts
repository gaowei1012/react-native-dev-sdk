import React from 'react';
declare type tabBarItemType = {
    tintColor?: string;
    selectIcon?: string;
    normalIcon?: string;
    focused?: boolean;
};
declare const TabBarItem: React.FC<tabBarItemType>;
export { TabBarItem };
