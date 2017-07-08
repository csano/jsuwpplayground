
window.onload = () => {
    var name = new WinRtComponent.Name("Chris", "Sano");
    var greeter = new WinRtComponent.Greeter();
    greeter.ongreet = greet;
    greeter.sayHelloTo(name);

    var app = WinJS.Application;
    app.addEventListener("activated", onActivatedHandler, true);
    app.start();
}


function greet(ev: any) {
  document.getElementById('greeting').innerText = ev.message;
}

function onActivatedHandler(eventArgs: any) {
    if (eventArgs.detail.kind == Windows.ApplicationModel.Activation.ActivationKind.protocol) {

    }
    console.log("activated");
}