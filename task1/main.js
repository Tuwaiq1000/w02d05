let list = [];
$("body").append(
  `<div id="main"> <input type="text">  </input id="input"><button id="addBut">Add to List</button><ul></ul><p>You have <span id='valofcom'>0</span> todos left</p><button id="clearLi">Clear List</button><button id="clearCom">Clear Completead</button></div>`
);

//  const editItem=()=>{

//  };

//  const removeItem=()=>{

//  }

const updateTheItem = (i) => {
  list[i].item = $("#editInput-" + i).val();
  randerList();
};

/////////////

const randerList = () => {
  $("ul").html("");
  for (let i = 0; i < list.length; i++) {
    $("ul").append(`<li  id="li-${i}"><p id="litext-${i}"> ${list[i].item}</p> <button id="edit-${i}">EDIT</button><button id="remove-${i}">REMOVE</button></li>` );
   
    $("#edit-" + i).click(function (){
        $("#li-" + i).html(`<input id='editInput-${i}' />`);
        $("#editInput-" + i).change(() => 
            {
              updateTheItem(i);
            });
     });


    $("#remove-" + i).click(function () {
        list.splice(i, 1);
        randerList();
    });

    $("#litext-" + i).click(function(){
        console.log(i);
        list[i].Complete = ! list[i].Complete
        randerList()
        
    })


    let countcomp = list.filter((text) => { !text.Complete;});
    let lengComItem = countcomp.length;
    $("#valofcom").text(`${lengComItem}`);


    if (list[i].Complete){
        $("#litext-" + i).addClass("completeMision")
    }

  }
};
$("#clearLi").click(function () {
  list.length = 0;
  randerList();
});

$("#clearCom").click(function () {
  list = list.filter((text, index) => {
    return !Text.Complete;
  });
  randerList();
});

$("#addBut").click(function () {
  list.push({ item: $("input").val(), Complete: false });
  $("input").val("");
  randerList();
});
