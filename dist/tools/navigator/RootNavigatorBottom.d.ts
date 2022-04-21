import React from 'react';
declare type TabsType = {
    title: string;
    route: string;
    normalIcon: any;
    selectIcon: any;
    components: any;
};
declare const RootNavigatorBottom: React.FC<{
    tabs: TabsType[];
}>;
export { RootNavigatorBottom };
