import type { ReactElement } from 'react';
type IbuttonType = {
    text: string | ReactElement;
    onPress?: () => void;
    buttonPropsStyle?: any;
    type?: string | 'default';
};
declare const _default: import("react").NamedExoticComponent<IbuttonType>;
export default _default;
