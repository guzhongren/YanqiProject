declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
declare module "cesium/Cesium";
// declare module "cesium/Cesium" {
//     export var Cesium :any;
// }
