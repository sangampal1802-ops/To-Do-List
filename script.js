let input= document.querySelector("#input");
let add_btn= document.querySelector("#add_btn");

// let task= document.querySelector(".task_heading");




let task_container= document.querySelector(".task_container")

input.addEventListener("keydown", (e) =>{
    if(e.key==="Enter"){
        add_btn.classList.add("active");
        add_btn.click();
    }
})

add_btn.addEventListener("click", ()=> {

    setTimeout(() => {
        add_btn.classList.remove("active"); 
    }, 90);

    if(input.value.trim()==="")
        return;
   let div=  document.createElement("div")
   div.classList.add("task")
    div.innerHTML= `
                <div class="task_list">
                    <h1 id="task_heading">${input.value.trim()}</h1>
                </div>
                <div class="btn">
                    <button id="done_btn" class="dd_btn">DONE</button>
                    <button id="delete_btn" class="dd_btn">DELETE</button>
                </div>`

task_container.appendChild(div);
task_container.scrollTop= task_container.scrollHeight;
input.value= "";



let task_delete_btn= div.querySelector("#delete_btn");
let task_done_btn= div.querySelector("#done_btn");

task_delete_btn.addEventListener("click", ()=> {

    task_delete_btn.parentElement.parentElement.remove();
})

task_done_btn.addEventListener("click", () => {
    
    let task_heading= task_done_btn.parentElement.parentElement.querySelector("#task_heading");

    // This is for check or uncheck

    task_heading.classList.add("done");
    task_done_btn.style.visibility = "hidden";

    // This is for toggle

    // task_heading.classList.toggle("done");
})

})