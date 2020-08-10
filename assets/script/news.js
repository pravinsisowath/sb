//fetch request for Articles - need to apply to articles category
          //  fetch('https://spaceflightnewsapi.net/api/v1/blogs?news_site=planetarysociety')
          fetch('https://spaceflightnewsapi.net/api/v1/articles')
          .then(r => r.json())
          .then(data => {
            console.log(data)
            for(let i = 0;i< data.docs.length;i++)
          {
            let newElem = document.createElement('div')

          newElem.innerHTML = 
`
           <div class="article-post${i}">
          <h3 class="articleTitle">${data.docs[i].title}<small class="date"></small></h3>
          <img class="thumbnail" src="${data.docs[i].featured_image}">
          <div class="callout">
            <ul class="menu simple">
              <li><a>Date: ${data.docs[i].published_date.slice(0, 10)}</a></li>
              <li><a>Publication: ${data.docs[i].news_site_long}</a></li>
            </ul>
          </div>
          <a class="readMore button button-rounded-hover" data-url="${data.docs[i].url.replace("http:" ,"https:")}"">Read More</a>
        </div>
          `
          

          document.getElementById('articles').append(newElem)
          }

        }).catch(err => console.log(err))


   fetch('https://spaceflightnewsapi.net/api/v1/blogs?news_site=planetarysociety')
  fetch('https://spaceflightnewsapi.net/api/v1/blogs')
    .then(r => r.json())
    .then(data => {
      console.log(data)
      for (let i = 0; i < data.docs.length; i++) {
        let newElem = document.createElement('div')

        newElem.innerHTML =
          `
           <div class="blogs-post${i}">
          <h3 class="articleTitle">${data.docs[i].title}<small class="date"></small></h3>
          <img class="thumbnail" src="${data.docs[i].featured_image}">
          <div class="callout">
            <ul class="menu simple">
              <li><a>Date: ${data.docs[i].published_date.slice(0, 10)}</a></li>
              <li><a>Publication: ${data.docs[i].news_site_long}</a></li>
            </ul>
          </div>
          <a class="readMore button button-rounded-hover" data-url="${data.docs[i].url.replace("http","https")}">Read More</a>
        </div>
          `

        document.getElementById('blogs').append(newElem)
      }

    }).catch(err => console.log(err))


        fetch('https://spaceflightnewsapi.net/api/v1/reports')
        .then(r => r.json())
          .then(data => {
            console.log(data)

            for (let i = 0; i < data.docs.length; i++) {
              let newElem = document.createElement('div')

              newElem.innerHTML =
                `
           <div class="reports-post${i}">
          <h3 class="articleTitle">${data.docs[i].title}<small class="date"></small></h3>
          <div class="callout">
            <ul class="menu simple">
              <li><a>Date: ${data.docs[i].published_date.slice(0, 10)}</a></li>
              <li><a>Summary: ${data.docs[i].summary}</a></li>
              <li><a>Publication: ${data.docs[i].news_site_long}</a></li>
            </ul>
          </div>
          <a class="readMore button button-rounded-hover" data-url="${data.docs[i].url}" href="${data.docs[i].url}" target="_blank">Read More</a>
        </div>
          `
          console.log(data.docs[i].url)
              document.getElementById('reports').append(newElem)
            }
           
          }).catch(err => console.log(err))

let open = false
          $(this).on("click",event =>
          {
            console.log(event)
         
              let url = event.target.dataset.url
      
              console.log(url)
                 if(event.target.className.split(" ")[0] === "readMore" && !open)
               {
                 try
                 {
                 console.log("click")
                 let newFrame = document.createElement("div")
                 newFrame.innerHTML = `  
                 <iframe id ="iframe-id"  frameborder="0"  src="${url}"></iframe>`
                 $(`#content`).append(newFrame)
                //  document.getElementById("iframe-id").style.transition = "500ms"
                //  document.getElementById("iframe-id").style.height = 800
                //   document.getElementById("iframe-id").style.opacity = "1"
                  
               
                open = true
                 }
                 catch(err){console.log(err)}
               }
               else
               {
                 open = false
                 let iframe=document.getElementById("iframe-id");
                     document.getElementById("iframe-id").style.transition = "500ms"
                     document.getElementById("iframe-id").style.bottom = 0
                     document.getElementById("iframe-id").style.height = 0
                      document.getElementById("iframe-id").style.opacity = "1"
                    setTimeout(() => {
                      iframe.parentNode.removeChild(iframe);
                    }, 2000);
               }
      
          })

   