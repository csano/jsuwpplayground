

window.onload = () => {
  var name = new WinRtComponent.Name("Chris", "Sano");
  document.getElementById("greeting").innerText = WinRtComponent.Greeter.sayHelloTo(name);
}
