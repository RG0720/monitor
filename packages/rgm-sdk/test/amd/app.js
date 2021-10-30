define(["../../dist/rgm.amd"], function (Starter) {
  const monitor = new Starter("http://localhost:5555", "amdProject");
  monitor.start();
});
