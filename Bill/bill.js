const getRestaurant = () => {
    let cont = document.getElementById("bill")

    let bill = document.createElement("h3")
    bill.setAttribute("class", "text-center m-2 text-danger")
    bill.textContent = "BILL"

    let parentRow = document.createElement("div")
    parentRow.setAttribute("class", "row mt-2")

    let parentCol = document.createElement("div")
    parentCol.setAttribute("class", "col-8 offset-2")

    let row = document.createElement("div")
    row.setAttribute("class", "row")

    let col1 = document.createElement("div")
    col1.setAttribute("class", "col-3")

    let image = document.createElement("img")
    image.setAttribute("class", "image-size mt-3 rounded")
    image.src = "..."
    image.alt = "..."

    col1.append(image)

    let col2 = document.createElement("div")
    col2.setAttribute("class", "col-9")

    let header = document.createElement("h3")
    header.setAttribute("class", "margin")
    header.textContent = "name of restaurant"

    col2.append(header)

    row.append(col1, col2)

    parentCol.append(row)

    parentRow.append(parentCol)

    cont.append(bill, parentRow)
}

const getItems = () => {
    let cont = document.getElementById("items")

    let parentRow = document.createElement("div")
    parentRow.setAttribute("class", "row mt-2")

    let parentCol = document.createElement("div")
    parentCol.setAttribute("class", "col-8 offset-2")

    let row = document.createElement("div")
    row.setAttribute("class", "row")

    let col1 = document.createElement("div")
    col1.setAttribute("class", "col-8")

    let card1 = document.createElement("div")
    card1.setAttribute("class", "card border-0")

    let cardBody1 = document.createElement("div")
    cardBody1.setAttribute("class", "card-body p-2")

    let item = document.createElement("p")
    item.setAttribute("class", "p-0 m-0")
    item.textContent = "name of item"

    cardBody1.append(item)

    card1.append(cardBody1)

    col1.append(card1)

    let col2 = document.createElement("div")
    col2.setAttribute("class", "col-4")

    let card2 = document.createElement("div")
    card2.setAttribute("class", "card border-0")

    let cardBody2 = document.createElement("div")
    cardBody2.setAttribute("class", "card-body p-2")

    let price = document.createElement("small")
    price.setAttribute("class", "text-muted p-0 m-0 float-right")
    price.textContent = "Rs. " + "price of item"

    cardBody2.append(price)

    card2.append(cardBody2)

    col2.append(card2)

    row.append(col1,col2)

    parentCol.append(row)

    parentRow.append(parentCol)

    cont.append(parentRow)


}

getRestaurant()

getItems()




{/* 
        <div id = "items" class="container">
            <div class="row mt-5">
                <div class="col-8 offset-2">
                    <div class="row">
                        <div class="col-8">
                            <div class="card border-0 ">
                                <div class="card-body p-2">
                                    <p class="p-0 m-0">Chicken</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card border-0 ">
                                <div class="card-body p-2">
                                    <small class="text-muted p-0 m-0 float-right">Rs. 250</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}