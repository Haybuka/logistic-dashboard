let delayed;
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
        labels: ['','Oct 21','Oct 22','Oct 27','Oct 28','Oct 29'],
        datasets: [{
            label: 'shipments',
            data: [0,18,25,15,30,50],
            borderColor:'#58cad3',
            borderWidth:1,
            pointBackgroundColor:"#fff",
            fill:true,
            backgroundColor:"#64dae224"
            // tension:0.3
            //pbc for color of the indicator,tension for curve
        },
        {
            label: 'vehicle',
            data: [20,30,60,15,50,45],
            borderColor:'#826af9',
            borderWidth:1,
            pointBackgroundColor:"#fff",
            fill:true,
            backgroundColor:"#9686e424"
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
                    family:"'Poppins',sans-serif"
                }
            }
            //to remove data label
        }
       },
        //search for delayed to add animation
        radius:3,
        hoverRadius:15,
        responsive:true,
        scales :{
            y:{
                ticks :{
                    font:{
                        size:14,
                    },
                    color:'#fff',
                    
                    family:"'Poppins',sans-serif",
                    stepSize : 15,
                    callback : function (value){
                        return value + 'k'
                        //adds a unit
                    }
                },
                grid:{
                    display:true,
                    drawBorder:true,
                    drawOnChartArea:true,
                    drawTicks:true,
                    color: '#ffffff42'
                }
            },
            x:{
                ticks :{
                    font:{
                        size:14,
                    },
                    color:'#fff',
                    
                    family:"'Poppins',sans-serif"
                },
                grid:{
                    display:true,
                    drawBorder:true,
                    drawOnChartArea:true,
                    drawTicks:true,
                    color: '#ffffff42'
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


//nav toggles
let siteNav = document.querySelector('.site-nav');
let main = document.querySelector('main');

let harmburger = [...document.querySelectorAll('.harmburger')];
harmburger.forEach(burger =>{
    burger.addEventListener('click',()=>{
        main.classList.toggle('hide')
        siteNav.classList.toggle('toggle-nav')
      })
})
