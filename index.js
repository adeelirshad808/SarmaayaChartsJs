Chart.register(ChartDataLabels);

chartLabels = ["2017", '2018', '2019', '2020', 'TTM',]
equityToAssetData = [4.32, 5.37, 4.73, 4.89, 3.6,]
cashToPayoutData = [50.32, 46.37, 38.73, 56.88, 9.6,]
priceToSaleData = [4.32, 4.37, 2.73, 4.88, 5.6,]
currentRatioData = [1.32, 1.37, 1.73, 1.88, 1.6,]

var equityToAssetDatasets = {
    labels: chartLabels,
    datasets: [
        {
            type: 'line',
            label: 'Equity to Asset ',
            data: equityToAssetData,
            backgroundColor: 'rgb(97,207,5)',
            borderColor: 'rgb(97,207,5)',
            borderWidth: 1.8,
            lineTension: 0.4,
        }
    ]
}
var cashToPayoutDatasets = {
    labels: chartLabels,
    datasets: [
        {
            type: 'line',
            label: 'Cash to Payout ',
            data: cashToPayoutData,
            backgroundColor: 'rgb(97,207,5)',
            borderColor: 'rgb(97,207,5)',
            borderWidth: 1.8,
            lineTension: 0.4,
        }
    ]
}
var priceToSaleDatasets = {
    labels: chartLabels,
    datasets: [
        {
            type: 'line',
            label: 'Price to Sale ',
            data: priceToSaleData,
            backgroundColor: 'rgb(97,207,5)',
            borderColor: 'rgb(97,207,5)',
            borderWidth: 1.8,
            lineTension: 0.4,
        }
    ]
}
var currentRatioDatasets = {
    labels: chartLabels,
    datasets: [
        {
            type: 'line',
            label: 'Current Ratio',
            data: currentRatioData,
            backgroundColor: 'rgb(97,207,5)',
            borderColor: 'rgb(97,207,5)',
            borderWidth: 1.8,
            lineTension: 0.4,
        }
    ]
}

var chartStyling = {
    layout: {
        padding: 40
    },
    elements: {
        point: {
            hoverRadius: 5
        }
    },
    plugins: {
        legend: {
            display: false,

        },
        datalabels: {
            borderWidth: 0.5,
            color: 'green',
            anchor: 'start',
            align: 'end',
            offset: 6,
            formatter: (v, ctx) => {
                let label = ctx.chart.data.labels[ctx.dataIndex];
                if (label != 'TTM') {
                    label = ' ' + label;
                }
                return label + '\n ' + v;
            },
            font: {
                size: 8.5,
                weight: 'bold',

            }

        }
    },
    scales: {
        y: {
            display: false,
            grid: {
                display: false,
                lineWidth: 3
            }
        },
        x: {
            display: false,
            grid: {
                display: false,
            }
        }
    }
}

var ctx = document.getElementById('equityToAsset').getContext('2d');

var myChart = new Chart(ctx, {
    data: equityToAssetDatasets,
    options: chartStyling
})
var ctx = document.getElementById('cashToPayout').getContext('2d');

var myChart = new Chart(ctx, {
    data: cashToPayoutDatasets,
    options: chartStyling
})

var ctx3 = document.getElementById('priceToSale').getContext('2d');

var myChart = new Chart(ctx3, {
    data: priceToSaleDatasets,
    options: chartStyling
})
var ctx4 = document.getElementById('currentRatio').getContext('2d');

var myChart = new Chart(ctx4, {
    data: currentRatioDatasets,
    options: chartStyling
})