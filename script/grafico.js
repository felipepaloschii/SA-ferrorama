const areaGrafico = document.getElementById("grafico-sensores");

new Chart(areaGrafico, {
    type: "line",
    data: {
        labels: ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25"],
        datasets: [
            {
                label: "Velocidade",
                data: [60, 70, 65, 80, 72, 85],
                borderColor: "#55d3dd",
                backgroundColor: "#55d3dd",
                tension: 0.4
            },
            {
                label: "Temperatura",
                data: [70, 72, 71, 75, 73, 74],
                borderColor: "#e50000",
                backgroundColor: "#e50000",
                tension: 0.4
            },
            {
                label: "Vibracao",
                data: [30, 30, 29, 35, 31, 32],
                borderColor: "#00ca36",
                backgroundColor: "#00ca36",
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});