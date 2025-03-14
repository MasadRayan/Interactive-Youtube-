const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then(data => {
        displaycatagory(data.categories);
    })
}


const displaycatagory = (catagories) => {
    const catagoryContainer = document.getElementById("catagory-container");

    for(let catagory of catagories){
        const button = document.createElement("button");
        button.innerHTML = `
        <button onclick="loadCatagoryVideo(${catagory.category_id})" class="btn btn-sm px-5 mr-2 md:mr-0  hover:text-white hover:bg-[#FF1F3D] text-[#252525B3] bg-[#17171733] ">${catagory.category}</button>
        `
        catagoryContainer.appendChild(button);
    }
}

loadCatagory()

