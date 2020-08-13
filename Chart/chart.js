let ctx
let chart

let data = [{name : "Garland", sales : 2500}, {name : "Gyani Restaurant", sales : 3000}, {name : "Moana", sales : 3500}, {name : "Zaika", sales : 2800},{name : "Frank's Restaurant", sales : 4000},{name : "Momos", sales : 2500}, {name : "Neelam Restaurant", sales : 3200},{name : "Pind Balluchi", sales : 3600}]

let nameArray = []
for (let i = 0; i < data.length; i++) {
    nameArray.push(data[i].name)
}
//console.log(dateArray)

let salesArray = []
for (let i = 0; i < data.length; i++) {
    salesArray.push(Number(data[i].sales))
}
//console.log(salesArray)

let color = []
for (let i = 0; i < data.length; i++) {
    color.push('rgb(217, 83, 79)')
}
//console.log(color)

let options = {
    type: 'bar',
    data: {
        labels: nameArray,
        datasets: [{
            label: "Sales",
            data: salesArray,
            backgroundColor: color,
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}

window.addEventListener("load", function () {
    ctx = document.getElementById('chart')
    chart = new Chart(ctx, options)
})