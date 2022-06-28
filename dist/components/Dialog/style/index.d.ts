declare const styles: {
    dialogWrap: {
        flex: number;
        width: number;
        height: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
    };
    dialogContent: {
        width: number;
        alignItems: "center";
        height: number;
        backgroundColor: string;
        borderRadius: number;
        overflow: "hidden";
    };
    dialogButton: {
        position: "absolute";
        bottom: number;
        width: string;
        height: number;
        flexDirection: "row";
        borderTopColor: string;
        borderTopWidth: number;
        justifyContent: "space-between";
    };
    dialogBtnWrap: {
        width: string;
        borderRightColor: string;
        borderRightWidth: number;
        alignItems: "center";
        justifyContent: "center";
    };
    children: {
        paddingTop: number;
        alignItems: "center";
    };
    actionText: {
        color: string;
    };
    btnText: {
        fontSize: number;
    };
    title: {
        fontSize: number;
    };
    content: {
        padding: number;
        flexDirection: "row";
        flexWrap: "wrap";
    };
    contentLine: {
        lineHeight: number;
        fontSize: number;
    };
};
export { styles };
