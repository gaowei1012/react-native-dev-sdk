/// <reference types="react" />
import 'react-native-gesture-handler';
type TabsType = {
    title: string;
    route: string;
    normalIcon: any;
    selectIcon: any;
    components: any;
};
declare const DynamicTabNavigator: (props: {
    children: any;
    tabs: TabsType[];
}) => JSX.Element;
export { DynamicTabNavigator };
