import React from 'react';
declare type StatusBarShapeType = {
    barStyle?: any | 'light-content' | 'default';
    hiddle?: boolean;
    backgroundColor?: string;
};
interface topNavigationBarType {
    style?: any;
    title?: string;
    titleView?: React.ReactElement;
    titleLayoutStyle?: any;
    statusBar?: StatusBarShapeType;
    rightButton?: React.ReactElement;
    leftButton?: React.ReactElement;
    translucent?: boolean;
    color?: string;
    fontSize?: number;
    animated?: boolean;
    hide?: boolean;
}
declare const TopNavigationBar: React.FC<topNavigationBarType>;
export default TopNavigationBar;
