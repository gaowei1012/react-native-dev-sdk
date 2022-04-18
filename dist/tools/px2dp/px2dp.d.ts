declare class Px2dpTools {
    static defaultWidth: number;
    /**
     * 设置ui初始尺寸
     * @param width number
     */
    static installWidth(width: number): void;
    /**
     * 获取设备可见区域宽度
     * @returns number
     */
    static width(): number;
    /**
     * 获取设备可见区域高度
     * @returns number
     */
    static height(): number;
    /**
     * 设置像素，根据ui尺寸适配。默认一倍图 375
     * @returns number
     */
    static setPixel(uiEleWidth: number): number;
}
export { Px2dpTools };
