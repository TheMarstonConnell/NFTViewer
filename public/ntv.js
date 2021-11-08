function main(){
    fetch("/ip").then(function(response) {
        return response.text();

      }).then(function(data) {
        let text = document.createElement('h1');
        text.innerHTML = "VISIT: " + data + ":3000/verify.html on a device with MetaMask installed to get your NFTs on this screen.";
        document.body.appendChild(text);
      }).catch(function() {
    
    });
}

window.addEventListener('load', (event) => {
    main();
});