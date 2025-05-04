// Chart configuration without data
const chartSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with data loaded from JSON file.",
    "data": {
        // "url": "data.json",
        "url": "https://raw.githubusercontent.com/BGellert1/BGellert1.github.io/refs/heads/main/data.csv",
        "format": {
            "type": "csv",
            "property": "chartData"
        }
    },
    "mark": {
        "type": "bar",
        "tooltip": true,
        "cornerRadius": 4
    },
    "width": 500,
    "height": 300,
    "encoding": {
        "x": {
            "field": "category",
            "type": "nominal",
            "title": "Categories",
            "axis": {
                "labelAngle": 0,
                "titleFontSize": 14,
                "labelFontSize": 12
            }
        },
        "y": {
            "field": "value",
            "type": "quantitative",
            "title": "Values",
            "axis": {
                "titleFontSize": 14,
                "labelFontSize": 12,
                "grid": true
            }
        },
        "color": {
            "field": "category",
            "type": "nominal",
            "scale": {
                "range": ["#FF69B4", "#FFD700", "#FFA500", "#FF1493", "#FFC0CB", "#FFB6C1", "#FFE4E1", "#FF6347", "#FF8C00"]
            },
            "legend": null
        }
    },
    "config": {
        "view": {"stroke": null},
        "axis": {
            "gridColor": "#e0e0e0",
            "domainColor": "#e0e0e0",
            "tickColor": "#e0e0e0"
        }
    }
};

// Function to render the chart
function renderChart() {
    vegaEmbed('#vis', chartSpec, {
        actions: {
            export: true,
            source: false,
            compiled: false,
            editor: false
        }
    }).catch(error => {
        console.error('Error rendering the chart:', error);
        document.getElementById('vis').innerHTML = 'Error loading the chart data. Please check the console for details.';
    });
}

// Render chart when the document is ready
document.addEventListener('DOMContentLoaded', renderChart); 