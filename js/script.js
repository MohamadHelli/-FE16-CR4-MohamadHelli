let days = JSON.parse(list);

function updateHTML(arr) {
    document.getElementById("menu").innerHTML = "";
    for (let info of arr) {
        document.getElementById("menu").innerHTML += `
        <div class="col-lg-3 col-md-5 col-sm-10 col-xs-12">
            <div class="card shadow-lg mb-5 bg-body rounded" style="width: 18rem;">
            <div class="m-3 d-flex justify-content-between">
                <div>
                    <button type="button" class="btn btn-info text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .6rem; --bs-btn-font-size: .75rem;">Task</button>
                </div>
                <div>
                    <i class="fa-solid fa-bookmark"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
                <img src="${info.image}" class="card-img-top img-thumbnail">
            <div class="card-body">
                <h5 class="card-title text-center">${info.title}</h5>
                <p>${info.description}</p>
                <hr>
                <p class="card-text"> 
                <i class="fa-solid fa-triangle-exclamation"></i> Priority level: <a class="btn btn-success btn-sm btn-level "><span class="result">${info.level}</span></a></p>
                <p><i class="fa-solid fa-calendar-days"></i> Deadline: ${info.Date}</p>
                <hr>
                <div class="d-flex d-flex justify-content-end gap-2">
                    <a href=" " class="btn btn-danger"> <i class="fa-solid fa-trash-can"></i> Delete</a>
                    <a href=" " class="btn btn-success"> <i class="fa-solid fa-circle-check"></i> Done</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    increaselikes();
}

function increaselikes() {
    let likebtn = document.getElementsByClassName("btn-level");
    for (let i = 0; i < likebtn.length; i++) {
        likebtn[i].addEventListener("click", function() {
            days[i].level++;
            document.getElementsByClassName("result")[i].innerHTML = days[i].level;
            var sortedArray = days.sort((a, b) => b.level - a.level);
            updateHTML(sortedArray);
        });
    }
}


updateHTML(days);
increaselikes();