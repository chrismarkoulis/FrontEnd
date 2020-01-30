const drop1 = document.getElementById("drop1");
const drop2 = document.getElementById("drop2");
const drop3 = document.getElementById("drop3");

const drag1 = document.getElementById("drag1");
const drag2 = document.getElementById("drag2");
const drag3 = document.getElementById("drag3");


function preventDefault(e) {
    e.preventDefault();
}

drop1.addEventListener("dragover", preventDefault);
drop2.addEventListener("dragover", preventDefault);
drop3.addEventListener("dragover", preventDefault);

drop1.addEventListener("dragenter", preventDefault);
drop2.addEventListener("dragenter", preventDefault);
drop3.addEventListener("dragenter", preventDefault);



//=========================== DRAG EVENTS ===========================//


drag1.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.getAttribute("id")

    );
    console.log(e.type, e.target);
});
drag2.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.getAttribute("id")

    );
    console.log(e.type, e.target);
});
drag3.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.getAttribute("id")

    );
    console.log(e.type, e.target);
});



//====================== DROP EVENTS =========================//

drop1.addEventListener("drop", function (e) {

    const id = e.dataTransfer.getData("text/plain");
    console.log(id);
    const dragEl = document.querySelector("#" + id);
    console.log(dragEl);
    e.currentTarget.querySelector("div").appendChild(dragEl);
    console.log(e.target);
});
drop2.addEventListener("drop", function (e) {

    const id = e.dataTransfer.getData("text/plain");
    console.log(id);
    const dragEl = document.querySelector("#" + id);
    console.log(dragEl);
    e.currentTarget.querySelector("div").appendChild(dragEl);
    console.log(e.target);
});
drop3.addEventListener("drop", function (e) {

    const id = e.dataTransfer.getData("text/plain");
    console.log(id);
    const dragEl = document.querySelector("#"+ id);
    console.log(dragEl);
    e.currentTarget.querySelector("div").appendChild(dragEl);
    console.log(e.target);
});



//================ ADD TASK ===================//


const button = document.getElementById("button");

button.addEventListener("click", function addTask(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const div = document.getElementById("drop1");

    div.innerHTML += `
    
    <div id="drop3"++ draggable="true" class="bg-primary text-white border">${title}</div>
    
    `
    document.querySelector('#title').value = '';
    if (title === '') {
       alert('Please enter title first')
    };
    
    function preventDefault(e) {
        e.preventDefault();
    }

    div.addEventListener("dragenter", preventDefault);
    div.addEventListener("dragover", preventDefault);
    div.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", e.target.getAttribute("id")
    
        );
        console.log(e.type, e.target);
    });
    div.addEventListener("drop", function (e) {

    const id = e.dataTransfer.getData("text/plain");
    console.log(id);
    const dragEl = document.querySelector("#"+ id);
    console.log(dragEl);
    e.currentTarget.querySelector("div").appendChild(dragEl);
    console.log(e.target);
});

});

