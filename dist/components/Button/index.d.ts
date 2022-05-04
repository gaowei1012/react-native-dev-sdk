import React from 'react';
declare type buttonType = {
    text: string | React.ReactElement;
    onPress?: () => void;
    buttonPropsStyle?: any;
    type?: string | 'default';
};
declare const Button: React.FC<buttonType>;
export default Button;
