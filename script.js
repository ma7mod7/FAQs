let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus")
let isOpen="close";

function showData(id){
    console.log(isOpen)
    let mainArticle=document.querySelector(".main__contant--article-"+id);
    let plus=document.querySelector(".plus-"+id);
    let minus=document.querySelector(".minus-"+id)
    if(isOpen!="open"){
        mainArticle.classList.add("flag");
        plus.classList.remove("flag");
        minus.classList.add("flag");
        isOpen="open";
    }
    else{
        mainArticle.classList.remove("flag");
        plus.classList.add("flag");
        minus.classList.remove("flag");
        isOpen="close";
    }
}
