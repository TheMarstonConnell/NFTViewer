async function main(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    console.log(account);

    let url = "/set_address?address=" + account;
    
    fetch(url).then(function(response) {
        window.location.href = "/index.html";
    }).catch(function() {
        console.log("error");
    });
}


window.addEventListener('load', (event) => {
    main();
});