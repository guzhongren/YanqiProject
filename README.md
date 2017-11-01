# 框架
![echats+arcgis](./gitImage/react-echarts.png)
## 获取代码
```
git clone https://github.com/guzhongren/YanqiProject.git
```
## 运行代码
1. 安装依赖
```
yarn install
```
2. 打包通用代码及样式
```shell
yarn run vendor
```
3. 开发环境运行
```
yarn run dev
```
4. 生产环境
```
yarn run build
```
运行完成之后将public下的文件目录copy至Web容器下即可。
### ***命令之后要将dist/fa目录移动至dist/css/下, 此bug稍后再改***

## 配置ags api

在[官网](https://developers.arcgis.com/javascript/latest/guide/get-api/index.html)下载4.X版本的API,解压后将4.X目录下的所有文件拷贝至public/arcgis_js_api目录下；按照官方文档修改init.js和dojo.js中的路径，本文修改如下
将
```
[HOSTNAME_AND_PATH_TO_JSAPI]
```
替换为
```
/arcgis_js_api/
```
结果显示如下

![api 配置结果](./gitImage/AGS_API_config.png)

## esri-loader bug
修改node_modules/esri-loader/src/esri-loader.d.ts中关于dojoRequire callback的参数,最终结果如下
```
export declare function isLoaded(): Element;
export declare function bootstrap(callback?: (error: Error, dojoRequire?: any) => void, options?: any): void;
export declare function dojoRequire(modules: string[], callback: Function): void;
declare var _default: {
    isLoaded: () => Element;
    bootstrap: (callback?: (error: Error, dojoRequire?: any) => void, options?: any) => void;
    dojoRequire: (modules: string[], callback: Function) => void;
};
export default _default;

```

