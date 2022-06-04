let days = JSON.parse(list);

function updateHTML(arr) {
    for (var a = 0; a < arr.length; a++) {
        document.getElementById("result").innerHTML +=
            `
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
                    <img src="${arr[a].image}" class="card-img-top img-thumbnail">
                <div class="card-body">
                    <h5 class="card-title text-center">${arr[a].title}</h5>
                    <p>${arr[a].description}</p>
                    <hr>
                    <p class="card-text"> 
                    <i class="fa-solid fa-triangle-exclamation"></i> Priority level: <a id="btn-${a}" class="btn btn-success btn-sm btn-level "><span class="result">${arr[a].level}</span></a></p>
                    <p><i class="fa-solid fa-calendar-days"></i> Deadline: ${arr[a].Date}</p>
                    <hr>
                    <div class="d-flex d-flex justify-content-end gap-2">
                        <a href=" " class="btn btn-danger"> <i class="fa-solid fa-trash-can"></i> Delete</a>
                        <a href=" " class="btn btn-success"> <i class="fa-solid fa-circle-check"></i> Done</a>
                        </div>
                    </div>
                </div>
            </div>

        `;
        let likebtn = document.querySelectorAll(".btn-level");
        likebtn.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                let level = days[i].level++;
                if (level < 6) {
                    btn.querySelector(".result").innerHTML = level;
                    if (level == 3) {
                        document.getElementById("btn-" + i++).style.
                        background = "blue";
                    } else if (level == 5) {
                        document.getElementById("btn-" + i++).style.background = "red";
                    }
                }

            });
        });
    }
}










updateHTML(days);