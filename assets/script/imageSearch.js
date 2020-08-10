
  AOS.init();

$("#autocomplete-input").keydown(event =>{
   
    if(event.key === "Enter" && $("#autocomplete-input").val().length > 0)
    {
        $("#content").empty()
    
        
        console.log(event.key)
        let url = `https://images-api.nasa.gov/search?q=${$(`#autocomplete-input`).val().replace(" ","+")}`
        let req = new Request(url, {
            method : `GET`,
            data : {},
            crossDomain : true,
            mode : `cors`,
            dataType : `html`
        })
        fetch(req)
        .then(resp => resp.json())
        .then(data => process(data))
        .catch(err => console.log(err))
        $(`#autocomplete-input`).val(``)
       
    }
}
    )

    $(this).on(`click`,event =>
	{
		console.log(event)
		
		if($(event.originalTarget).is("whatever triggers image opening")) {return;} 

    if(document.getElementById('viewImage').style.display == 'block') {
            closeimgv();
    }
		
	}
	)


let process = (data) =>
{
   
         data.collection.items.forEach(function(user){
        //  console.log(user.data)

        
        console.log(user)
         user.data.forEach(function(items)
         {
             
            //  console.log(items)
            let newElem = document.createElement('div')
            newElem.innerHTML = ` 
            <div class="card item" aos="flip-up">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" id="viewImage" src="${user.links[0].href}" alt="${user.links[0].render}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Tittle : ${items.title ||`N/A`}<i class="material-icons right">more_vert</i></span>
              <p>Date created: ${items.date_created.replace(/T|Z/g," ") ||`N/A`}</p>
              
            </div>
              
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Tittle : ${items.title ||`N/A`}<i class="material-icons right">close</i></span>
              <p>Description : ${items.description ||`N/A`}</p>
              <p>Photographer : ${items.photographer ||`N/A`}
              <p>Location : ${items.location ||`N/A`}</p>
              <p><b>Keywords : ${items.keywords ||`N/A`}</b></p>
            </div>
          </div>

             
         `
            // newElem.innerHTML = `  
            // <div class = "myDiv" >
            // <img src="${user.links[0].href}" alt="${user.links[0].render}">
            // <p>Tittle : ${items.title ||`N/A`}</p>
            // <p>Album : ${items.album || `N/A`}</p>
            // <p>Center : ${items.center ||`N/A`}</p>
            // <p>Date created: ${items.date_created ||`N/A`}</p>
            // <p>Location : ${items.location ||`N/A`}</p>
            // <p>Description : ${items.description ||`N/A`}</p>
            // <p>Photographer : ${items.photographer ||`N/A`}</p>
            // <p>Keywords : ${items.keywords ||`N/A`}</p>        
            // <br><br> 
            // </div>`

            $('#content').append(newElem)        
           
         })
       
            })
}


// View image

const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button =>
    {
        button.addEventListener("click", ()=>
        {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
            console.log("open")
        })
    })

    closeModalButtons.forEach(button =>
        {
            button.addEventListener("click", ()=>
            {
                const modal = button.closest(".modal")
                closeModal(modal)
            })
        })

        overlay.addEventListener("click", () =>
    {
        const modals = document.querySelectorAll(`.modal .active`)

        modals.forEach(modal =>
            {
                console.log(modal)
                closeModal(modal)
            })
    })

    let openModal = (modal) =>
    {
    
        if(modal == null) return
        modal.classList.add("active")
        overlay.classList.add("active")
        console.log("add")
    }

    let closeModal = (modal) =>
    {
        if(modal == null) return
        modal.classList.remove("active")
        overlay.classList.remove("active")
        console.log("close")
    }
