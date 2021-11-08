function main(){
    fetch("/ip").then(function(response) {
        return response.text();

      }).then(function(data) {
        let text = document.createElement('h1');
        text.innerHTML = "VISIT: " + data + ":3000/verify.html on a device with MetaMask installed to get your NFTs on this screen.";

        let timer = document.createElement('h2');
        document.body.appendChild(text);
        document.body.appendChild(timer);

        let x = 10;
        setInterval(() => {
            timer.innerHTML = "This page will refresh in " + x + " seconds..."
            x -= 1;
        }, 1000);

        setTimeout(() => {
            window.location.href = "/";
        }, 10 * 1000);
      }).catch(function() {
    
    });
}

window.addEventListener('load', (event) => {
    main();
});