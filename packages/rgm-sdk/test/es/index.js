import Monitor from "../../dist/rgm.es.js";

const monitor = new Monitor("http://localhost:5555", "amdProject");
monitor.startListeners();
