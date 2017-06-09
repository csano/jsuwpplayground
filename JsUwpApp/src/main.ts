

window.onload = () => {
  var name = new WinRtComponent.Name("Chris", "Sano");
  var greeter = new WinRtComponent.Greeter();
  greeter.ongreet = greet;
  greeter.sayHelloTo(name);

}

function greet(ev: any) {
  document.getElementById('greeting').innerText = "greeted";
}