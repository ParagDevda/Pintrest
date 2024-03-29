var arr = [
  {
    name: "orange",
    image:
      "https://i.pinimg.com/236x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg",
  },
  {
    name: "cherry",
    image:
      "https://i.pinimg.com/236x/29/52/1b/29521bb74d8d04d7eff3e0a438529ec1.jpg",
  },
  {
    name: "apple",
    image:
      "https://i.pinimg.com/236x/60/c3/dd/60c3dd2d6f24059a1fed2e9ba9ad43d7.jpg",
  },
  {
    name: "cat",
    image:
      "https://i.pinimg.com/564x/2f/49/34/2f49347272440be56744e8f67d51fa64.jpg",
  },
  {
    name: "lion",
    image:
      "https://i.pinimg.com/236x/f9/9b/88/f99b8849501ee63ebd86b1db82963055.jpg",
  },
  {
    name: "library",
    image:
      "https://i.pinimg.com/236x/0c/e5/91/0ce591dc1708e23c77257675d1a2a160.jpg",
  },
  {
    name: "sunset",
    image:
      "https://i.pinimg.com/236x/3c/55/45/3c55457fee2a871acc3d117052430943.jpg",
  },
  {
    name: "dog",
    image:
      "https://i.pinimg.com/236x/45/6f/5f/456f5fb46bc47cb05a0f5cd4961e6534.jpg",
  },
  {
    name: "bear",
    image:
      "https://i.pinimg.com/236x/3d/25/33/3d2533405844aec70fdd869e6fff8c0d.jpg",
  },
  {
    name: "milk shake",
    image:
      "https://i.pinimg.com/564x/e6/05/ea/e605ea841ebc795801f0d38858648979.jpg",
  },
];
var cart = [];
function photos() {
  var clutter = "";
  arr.forEach(function (obj,index ) {
    clutter += ` <div id="save"><div id="img">
        <img src="${obj.image}" alt=""></div>
        <div id="details"><h3>"${obj.name.toUpperCase()}"</h3>
            <button data-index = "${index}" class="add">save</button>
        </div>
        </div> `;
  });
  // console.log(clutter);

  document.querySelector("#nav2").innerHTML = clutter;
}
function search() {
  var i = document.querySelector("#img");
  var s = document.querySelector("#searchbar");
  var o = document.querySelector("#overlay");
  var h = document.querySelector("#hidden");
  s.addEventListener("focus", function () {
    o.style.backgroundColor = "black";
    o.style.opacity = "0.75";
    h.style.display = "block";
    o.style.zIndex = "5";
    h.style.zIndex = "99";
    i.style.opacity ="0.5";
  });

  s.addEventListener("blur", function () {
    o.style.backgroundColor = "";
    o.style.opacity = "1";
    h.style.display = "none";
    o.style.zIndex = "-1";
  });
  s.addEventListener("input", function () {
    var clutter = "";
    const filteredarr = arr.filter((obj) =>
      obj.name.startsWith(s.value.toLowerCase())
    );
    filteredarr.forEach(function (obj) {
      clutter += `<div id="sea1">
            <i class="ri-search-line"></i>
            <h3>${obj.name}</h3>
        </div>`;
    });
    h.innerHTML = clutter;
  });
}
function save() {
  var y = document.querySelector("#saved");
  var x = document.querySelector("#saved-img");
  var o = document.querySelector("#overlay");

  y.addEventListener("click", function () {
    y.style.display = "none";
    x.style.display = "block";
    x.style.zIndex = "9";
    x.style.width = "30%";
    // o.style.display = "block";
    o.style.zIndex = "5";
    o.style.backgroundColor = "black";
    o.style.opacity = "0.75";
    console.log("saved");
  });
  document.querySelector("#closebutton").addEventListener("click", () =>{
    console.log("abc");
    y.style.display = "block";
    o.style.backgroundColor = "";
    o.style.zIndex = "0";
    x.style.zIndex = "0";
    x.style.width = "0";
  });

}
function addtocart(){
  document.querySelector("#nav2").addEventListener("click",function(details){
    if(details.target.classList.contains('add')){
      alert("image saved");
      cart.push(arr[ details.target.dataset.index]);
      console.log(cart);
      var clutter = "";
      cart.forEach(function (obj ,index) {
        clutter += `<div id="save"><div id="img">
            <img src="${obj.image}" alt=""></div>
            <div id="details"><h3>"${obj.name.toUpperCase()}"</h3>
                <button data-index = "${index}" class="add">remove</button>
            </div>
            </div> `;})
            console.log(clutter);
            document.querySelector("#saved-image").innerHTML = clutter;
    };
    
  }) 
}
addtocart();
search();
photos();
save();
