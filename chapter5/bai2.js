function showcategory(){
    document.getElementById("cate").classList.toggle("d-block");
    if(document.getElementById("a").innerText == "Tìm kiếm nâng cao") document.getElementById("a").innerText = "Bỏ tìm kiếm nâng cao";
    else(document.getElementById("a").innerText = "Tìm kiếm nâng cao");
}
function onblurr(){
    document.getElementById("cate").classList.remove("d-block");
    document.getElementById("a").innerText = "Tìm kiếm nâng cao";
}