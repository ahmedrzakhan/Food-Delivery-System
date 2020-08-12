window.onload = function(){
    let restaurant =JSON.parse(localStorage.getItem("restaurants")) 
    console.log(restaurant)
    //restaurantNavBar(restaurant)
}

// const restaurantNavBar = (array) =>{
//     let header = document.querySelector("h1")
//     for(let i = 0; i < array.length; i++){
//         header.textContent = array[i].name
//     }
// }



/* <div id = "restaurants">
                <nav class="navbar navbar-expand-lg navbar-light bg-danger shadow-sm p-3 mb-5 rounded">
                    
                        <div class = "col-3">
                            <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            class="image m-3" alt="Responsive image">
                        </div>
                        <div class = "col-9">
                            <h1>Gyani's Restaurant</h1>
                            
                        </div>
                    
                </nav>
            </div> */