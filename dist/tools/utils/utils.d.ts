import 'cnchar-poly';
declare class Utils {
    /**
     * 生成A-Z,字符
     * @returns string[]
     */
    static getEN(): any;
    /**
     * 处理utc时间，转换为北京时间
     * @param utcDate
     */
    static formatDate(utcDate: string, format: string | 'YYYY-MM-DD hh:ss:mm'): string;
    /**
     * 处理tree数据，格式为 [{title: 'xxx', id: 'xxx'}, {title: 'xxx', id: 'xxx'}]
     * @param targetData 目标数据
     * @returns [A:[{title: 'xx', id:'xx'}],B:[{title: 'xx', id:'xx'}]]
     */
    static formatTargetData(targetData: any[]): {
        _targetHeaderData: any;
        _targetData: any;
    };
    static platform(): boolean;
    static type(option: number | string | Array<any> | Object): any;
}
export { Utils };
