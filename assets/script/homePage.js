$(document).foundation();
 
fetch('https://api.spacexdata.com/v3/info')
 .then(r => r.json())
 .then(data => {
   console.log(data)
   document.getElementById('info').innerHTML = `
   <p>Summary: ${data.summary}</p>
   </p>CEO: ${data.ceo}</p>
   <p>COO: ${data.coo}</p>
   <p>CTO: ${data.cto}</p>
   <p># of Employees: ${data.employees}</p>
   <p>Founded: ${data.founded}</p>
   <p>Headquarters: ${data.headquarters.address}, ${data.headquarters.city}, ${data.headquarters.state}
   `})
.catch(e => {console.log(e)})


for(let i = 1;i <= 10;i++)
{
fetch(`https://api.spacexdata.com/v3/history/${i}`)
 .then(r => r.json())
 .then(data => {
   console.log(data)
   document.getElementById(`timeline${i}`).innerHTML = `
  <p>${data.title}</p>
  <p>${data.details}</p>

   `})
.catch(e => {console.log(e)})
}



document.getElementById('searchID').addEventListener('click', event => {
 event.preventDefault()

 if (document.getElementById('name').value.length >= 1) {
   fetch(`https://api.spacexdata.com/v3/history/${document.getElementById('name').value.toLowerCase()}/`)
     .then(r => r.json())
     .then(data => {
       let eventElem = document.createElement('div')
       eventElem.className = 'card'
       eventElem.style = 'width: 18rem;'
       eventElem.innerHTML = `
     <div class="card-body">
     <p></p>
       <h5 class="card-title">
         Title: ${data.title}
       </h5>
       <p>
           Date: ${data.event_date_utc}
       </p>
       <p>
           Flight #: ${data.flight_number}
       </p>
       <p>
           Details: ${data.details}
       </p>
     </div>
   `
   
       document.getElementById('name').value = ''
       document.getElementById('events').innerHTML = ''
       document.getElementById('events').append(eventElem)
     })
     .catch(e => {
       console.log(e)
       alert('Event not found')
       document.getElementById('name').value = ''
       document.getElementById('events').innerHTML = ''
     })
 }
})

document.getElementById('searchFlight').addEventListener('click', event => {
 event.preventDefault()

 if (document.getElementById('name2').value.length >= 1) {
   fetch(`https://api.spacexdata.com/v3/launches/${document.getElementById('name2').value.toLowerCase()}/`)
     .then(r => r.json())
     .then(data => {
       let flightElem = document.createElement('div')
       flightElem.className = 'card'
       flightElem.style = 'width: 18rem;'
       flightElem.innerHTML = `
     <div class="card-body">
     <p></p>
       <h5 class="card-title">
         Mission Name: ${data.mission_name}
       </h5>
       <p>
           Launch Year: ${data.launch_year}
       </p>
       <p>
           Rocket Name: ${data.rocket.rocket_id}
       </p>
       <p>
           Rocket Type: ${data.rocket.rocket_type}
       </p>
     </div>
   `
   
       document.getElementById('name2').value = ''
       document.getElementById('flights').innerHTML = ''
       document.getElementById('flights').append(flightElem)
     })
     .catch(e => {
       console.log(e)
       alert('Event not found')
       document.getElementById('name2').value = ''
       document.getElementById('flights').innerHTML = ''
     })
 }
})

document.getElementById('searchRocket').addEventListener('click', event => {
 event.preventDefault()

 if (document.getElementById('name5').value.length >= 1) {
   fetch(`https://api.spacexdata.com/v3/dragons/dragon${document.getElementById('name5').value.toLowerCase()}/`)
     .then(r => r.json())
     .then(data => {
       let rocketElem = document.createElement('div')
       rocketElem.className = 'card'
       rocketElem.style = 'width: 18rem;'
       rocketElem.innerHTML = `
     <div class="card-body">
     <p></p>
       <h5 class="card-title">
         Name: ${data.name}
       </h5>
       <p>
           Description: ${data.description}
       </p>
       <p>
           First Flight: ${data.first_flight}
       </p>
       <p>
           Orbit Duration: ${data.orbit_duration_yr} years
       </p>
       <p>
           Launch Payload: ${data.launch_payload_mass.lb} lbs
       </p>
       <p>
           Return Payload: ${data.return_payload_mass.lb} lbs
     </div>
   `
   
       document.getElementById('name5').value = ''
       document.getElementById('rockets').innerHTML = ''
       document.getElementById('rockets').append(rocketElem)
     })
     .catch(e => {
       console.log(e)
       alert('Event not found')
       document.getElementById('name5').value = ''
       document.getElementById('rockets').innerHTML = ''
     })
 }
})



fetch('https://api.spacexdata.com/v3/roadster')
 .then(r => r.json())
 .then(data => {
   console.log(data)
document.getElementById('info4').innerHTML = `
 <p>Name: ${data.name}</p>
 <p>Details: ${data.details}</p>
 <p>Launch Date: ${data.launch_date_utc}</p>
 <p>Time in Orbit: ${data.period_days} days</p>
 <p>Speed: ${data.speed_mph} mph</p>
 <p>Distance from Earth: ${data.earth_distance_mi} miles</p>
 <p>Distance from Mars: ${data.mars_distance_mi} miles</p>
 `
 })
 .catch(e => {console.log(e)})