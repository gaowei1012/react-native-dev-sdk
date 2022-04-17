import { StyleProp, ViewStyle, TextStyle } from 'react-native';
declare type ShowToastType = {
    msg: string;
    duration?: number | 3000;
    position?: string | 'centner' | 'bottom' | 'top';
    shadow?: boolean | true;
    animation?: boolean;
    onShow?: () => void;
    onHidden?: () => void;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    backgroundColor: string;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    delay?: number;
};
declare class RootToast {
    static toast: any;
    /**
     *
     * @param msg 提示内容
     * @param duration 页面存留时间，默认为3秒
     */
    static showToast(options: ShowToastType): void;
}
export { RootToast };
