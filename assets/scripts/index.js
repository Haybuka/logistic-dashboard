let delayed;
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
        labels: ['Oct 20','Oct 21','Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26','Oct 27','Oct 28','Oct 29'],
        datasets: [{
            label: 'shipments',
            data: [0,10,25,15,30,50,15,10,0,40,20],
            borderColor:'#58cad3',
            pointBackgroundColor:"#fff",
            // tension:0.3
            //pbc for color of the indicator,tension for curve
        },
        {
            label: 'vehicle',
            data: [20,30,15,15,40,50,15,30,25,30],
            borderColor:'#826af9',
            fill:'#826af9',
            pointBackgroundColor:"#fff",
            // tension:0.3
            //pbc for color of the indicator,tension for curve
        }]
}
const config ={
    type:'line',
    data:data,
    options:{
       plugins:{
        legend:{
            display:false,
            labels:{
                font:{
                    size:16,
                    family:"'Poppins',sans-serif"
                }
            }
            //to remove data label
        }
       },
        //search for delayed to add animation
        radius:5,
        hoverRadius:10,
        responsive:true,
        scales :{
            y:{
                ticks :{
                    font:{
                        size:20
                    },
                    stepSize : 10,
                    callback : function (value){
                        return value + 'k'
                        //adds a unit
                    }
                }
            }
        },
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            }}
    }
}
const myChart = new Chart(ctx,config)
