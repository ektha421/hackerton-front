import React, { Component } from 'react';
// Import modules
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

class GuageChart extends Component {
    componentDidMount() {
        // create chart
        let chart = am4core.create('chartdiv', am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

        chart.innerRadius = -120;

        let axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 2;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor(
            'background',
        );
        axis.renderer.grid.template.strokeOpacity = 0.3;
        axis.renderer.minGridDistance = 100;

        let colorSet = new am4core.ColorSet();

        let range0 = axis.axisRanges.create();
        range0.value = 0;
        range0.endValue = 0.5;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);
        range0.axisFill.zIndex = -1;

        let range1 = axis.axisRanges.create();
        range1.value = 0.5;
        range1.endValue = 1;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);
        range1.axisFill.zIndex = -1;

        let range2 = axis.axisRanges.create();
        range2.value = 1;
        range2.endValue = 2;
        range2.axisFill.fillOpacity = 1;
        range2.axisFill.fill = colorSet.getIndex(4);
        range2.axisFill.zIndex = -1;

        let hand = chart.hands.push(new am4charts.ClockHand());
        //hand.value = 65;
        hand.fill = am4core.color('#e96968');
        hand.stroke = am4core.color('#e96968');
        hand.startWidth = 25;
        hand.innerRadius = am4core.percent(3);
        hand.radius = am4core.percent(35);
        console.log(hand);

        // using chart.setTimeout method as the timeout will be disposed together with a chart
        chart.setTimeout(randomValue, 100);

        function randomValue() {
            hand.showValue(1.24, 1000, am4core.ease.cubicOut);
            //chart.setTimeout(randomValue, 2000);
        }

        let legend = new am4charts.Legend();
        legend.isMeasured = false;
        legend.y = am4core.percent(100);
        legend.verticalCenter = 'bottom';
        legend.parent = chart.chartContainer;
        legend.data = [
            {
                name: 'S급 키워드',
                fill: chart.colors.getIndex(4),
            },
            {
                name: 'A급 키워드',
                fill: chart.colors.getIndex(2),
            },
            {
                name: 'B급 키워드',
                fill: chart.colors.getIndex(0),
            },
        ];
        console.log(legend);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    render() {
        return (
            <div
                id="chartdiv"
                className="chartdiv"
                style={{ width: '420px', height: '320px' }}
            ></div>
        );
    }
}

export default GuageChart;
