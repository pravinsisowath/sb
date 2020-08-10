
 let isClick = false
 //refresh page on browser resize

    $(window).bind('resize', function(e)
{
    if(!isClick)
{     
  scrollTo(0,0)
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
}
})


 window.onload = function() {
    setTimeout (function () {
     scrollTo(0,0)
     isClick = false
     document.body.style.overflow = "hidden"
    }, 100); 
   }


document.addEventListener('click',event =>
{
   
    if(event.target.className === "invisibleCircle")
    {
        console.log("yes")
       
        document.getElementById("jumbotron").style.transition = "2000ms"

        document.getElementById("jumbotron").style.opacity = "0"
        setTimeout(() => {
            document.getElementById("jumbotron").remove()
        }, 2000);
        setTimeout(() => {
            document.body.style.overflow = "scroll"
        }, 100);
        isClick = true
    }
})

// Add home page
let addHomePage = () =>
{
    let homeElem = document.createElement('div')
    homeElem.setAttribute("id","jumbotron")
    homeElem.innerHTML = `            
    <!-- Main home page/ Jumbotron -->
        <div class="container-1 demo-1">
            <div class="content1">
               <div id="largeheader" class="largeheader">
                   <!-- create a animate canvas using ThreeJS -->
                  <canvas id="democanvas"></canvas>    
                  <h1 class="maintitle" ><span class="thin" >Explore</span> eSPACE</h1>
                <!-- A clickable invisible circle that lead to a home page -->
                  <a href="spaceX.html">
                  <div class ="invisibleCircle"></div>
                </a>
               </div>
            </div>
         </div>
        `
         document.body.prepend(homeElem)
         document.body.style.overflow = "hidden"
}

addHomePage()
homePageAnimate()