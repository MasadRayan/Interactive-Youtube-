const loadCatagoryVideo = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showCatagoryVideo(data.category);
    })
}

const showCatagoryVideo = (videos) => {
    const videoContainer = document.getElementById("video-container");

    if (videos.length == 0) {
        videoContainer.innerHTML = `
        <div class=" col-span-full text-center flex flex-col pt-20 justify-center items-center">
            <img class="w-[120px] mb-5" src="image/Icon.png" alt="">
            <h2 class="text-3xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `
        return;
    }

    videoContainer.innerHTML = "";
    videos.forEach((video) => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        <div class="card bg-base-100 ">
            <figure class="relative">
                <img
                class = "w-full h-[180px] object-cover rounded"
                src= "${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute text-sm text-white bg-black bottom-2 right-2 px-2 rounded font-thin">3hrs 56 min ago</span>
            </figure>
            <div class="py-5 px-0 flex gap-3">
                <div class="profile">
                    <div class="avatar">
                        <div class="w-10 rounded-full">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="info">
                    <h2 class="font-bold mb-2">${video.title}</h2>
                    <p class="text-sm text-[#171717B3] flex gap-2 mb-2">
                        ${video.authors[0].profile_name}
                        <img class="w-5 h-5"
                         src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <p class="text-sm text-[#171717B3]">
                        ${video.others.views} views
                    </p>
                </div>
            </div>
        </div>
        `
        videoContainer.appendChild(videoCard);
    })
}