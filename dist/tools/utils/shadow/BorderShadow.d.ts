import { Component } from 'react';
export declare type BorderSettingShadowType = {
    side: string | 'bottom';
    width: number;
    color: string;
    border: number;
    opacity: number;
    inset: boolean;
    style: any;
};
export declare class BorderShadow extends Component<{
    setting: BorderSettingShadowType;
    children: any;
}> {
    render: () => JSX.Element;
}
