// nave-bar 
let bars = document.querySelector(".bars") as HTMLLIElement
let ul = document.querySelector("header ul") as  HTMLElement
let contact = document.querySelector(".contact") as HTMLElement
bars.addEventListener("click",function(): void{
    if(ul.offsetHeight === 0){
        ul.style.padding = "20px"
        ul.style.height = "260px"
        contact.style.opacity = "1"
        contact.style.transitionDelay = "0.4s"
    }else {
        ul.style.padding = "0px"
        ul.style.height = "0px"
        contact.style.opacity = "0"
        contact.style.transitionDelay = "0s"
    }
})
this.addEventListener("click",function() : void {
    if(ul.offsetHeight === 260){
        ul.style.padding = "0px"
        ul.style.height = "0px"
        contact.style.opacity = "0"
        contact.style.transitionDelay = "0s"
    }
})
// to top
let topp = document.querySelector(".top") as HTMLDivElement
window.addEventListener("scroll",function() : void{
    if(this.scrollY > 322) {
        topp.style.opacity = "1"
    }else {
        topp.style.opacity = "0"
    }
})
topp.addEventListener("click",function() : void{
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    })
})

// HTMLDivElement
if(document.title === "lavage hamza" || document.title === "service da lavage hamza"){
    let allPirent = document.querySelectorAll(".service .continer .pirent div") as NodeListOf<HTMLDivElement>
    this.addEventListener("scroll",function(){
        allPirent.forEach(function(e) : void {
            if(e.getBoundingClientRect().y + e.offsetHeight <= innerHeight){
                e.style.transform = "translateX(0)"
            }
        })
    })
}
// img link to google maps
if(document.title === "lavage hamza" || document.title === "contact da lavage hamza"){
    let imgMap = document.querySelector(".maps") as HTMLImageElement
    imgMap.addEventListener("click",function() : void {
        location.href = "https://maps.app.goo.gl/E1WHFx9GyJoDyRMn9"
    })
}