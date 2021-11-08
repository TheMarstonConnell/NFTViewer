
function buildFrame(asset){
    console.log(asset);

    let back_color = asset.background_color;

    let outerBlock = document.createElement("div");
    outerBlock.classList.add('container');

    let block = document.createElement("div");
    block.classList.add('nft_block');


    let img = document.createElement("img");
    img.src = asset.image_url;
    let src = document.getElementById("content");
    img.style.backgroundColor = "#" + back_color;


    let name = document.createElement("h2");
    name.innerHTML = asset.name;


    block.appendChild(img);
    block.appendChild(name);
    outerBlock.appendChild(block);

    src.appendChild(outerBlock);


}

function loadImages(nfts, page){


    buildFrame(nfts[page]);
    

    
}

function buildPage(assets, params){
    const page = params.get('page');
    if(page == null){
        let x = 0;
        let path = window.location.href.split('?')[0]
        for (const asset of assets.assets) {
            let blk = document.createElement('div');
            blk.classList.add('link_holder');
            let a = document.createElement('a');
            a.classList.add('link');
            let linkText = document.createTextNode(asset.name);
            a.appendChild(linkText);
            a.title = asset.name;
            a.href = path + "?address=" + params.get('address') + "&page=" + x;
            blk.appendChild(a);
            document.body.appendChild(blk);
            x = x + 1;
        }
    }else{
        loadImages(assets.assets, page);
    }

}

function main(){
    const urlParams = new URLSearchParams(window.location.search);

    fetch("/address").then(function(response) {

        return response.text();


      }).then(function(data) {
        let owner = data;

        console.log(owner);
        if(owner == "null"){


            window.location.href = "/need_to_verify.html";

            return;
        }
    
        let url = "https://api.opensea.io/api/v1/assets?owner=" + owner + "&order_direction=desc&offset=0&limit=20";
    
        fetch(url).then(function(response) {
            return response.json();
          }).then(function(data) {
            buildPage(data, urlParams);
          }).catch(function() {
            console.log("error");
          });
      }).catch(function() {
        



      });


    

    


    

}


window.addEventListener('load', (event) => {
    main();
});