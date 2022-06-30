import { Component } from 'react';
export declare type BoxSettingShadowType = {
    width: number;
    height: number;
    color: string;
    border: number;
    radius: number;
    opacity: number;
    x: number;
    y: number;
    style: any;
};
export declare class BoxShadow extends Component<{
    setting: BoxSettingShadowType;
    children: any;
}> {
    render: () => JSX.Element;
}
