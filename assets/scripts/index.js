let delayed;
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
        labels: ['Oct 20','Oct 21','Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26','Oct 27','Oct 28','Oct 29'],
        datasets: [{
            label: ' ',
            data: [10,5,15,10,20,5,15,20,10,10],
            borderColor:'#58cad3',
            pointBackgroundColor:"#fff",
            // tension:0.3
            //pbc for color of the indicator,tension for curve
        },
        {
            label: ' ',
            data: [20,15,15,5,20,10,15,10,5,10],
            borderColor:'#826af9',
            pointBackgroundColor:"#fff",
            // tension:0.3
            //pbc for color of the indicator,tension for curve
        }]
}
const config ={
    type:'line',
    data:data,
    options:{
        //search for delayed to add animation
        radius:5,
        hoverRadius:10,
        responsive:true,
        scales :{
            y:{
                ticks :{
                    stepSize : 5,
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
