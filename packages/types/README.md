# rgm

监控 sdk

```shell
npm install @rg0720/rgm
// 或
yarn add @rg0720/rgm
```

使用方式

```js
import Monitor from "@rg0720/rgm";

const monitor = new Monitor("http://localhost:5555", "amdProject");
monitor.startListeners();
```
