let delayed;
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
        labels: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        datasets: [{
            label: 'shipments against vehicle',
            data: [0,15,10,10,20,15],
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
