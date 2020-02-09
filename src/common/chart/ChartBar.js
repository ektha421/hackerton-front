import React, { Component } from 'react';
// Import modules
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

class ChartBar extends Component {
    componentDidMount() {
        let chart = am4core.create('amcharts-chart-div', am4charts.XYChart);
        chart.data = [
            {
                country: '커뮤니케이션',
                litres: 24.7,
            },
            {
                country: '동영상플레이어편집기',
                litres: 23.5,
            },
            {
                country: '게임',
                litres: 12.5,
            },
            {
                country: '도서및참고자료',
                litres: 9.9,
            },
            {
                country: '소셜',
                litres: 7,
            },
            {
                country: '지도 네비게이션',
                litres: 3.2,
            },
            {
                country: '엔터테인먼트',
                litres: 3,
            },
            {
                country: '쇼핑',
                litres: 2.5,
            },
            {
                country: '금융',
                litres: 2,
            },
            {
                country: '라이프스타일',
                litres: 1.5,
            },
        ];
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'country';
        categoryAxis.renderer.grid.template.disabled = true;
        console.log('cate', categoryAxis);
        // Add value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 45;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.renderer.grid.template.disabled = true;
        console.log('valaxis', valueAxis.renderer.grid);
        // Add series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = 'country';
        series.dataFields.valueY = 'litres';
        series.stroke.alpha = 0;
        series.columns.template.width = 12;
        series.marginBottom = 0;
        series.columns.template.adapter.add('fill', (fill, target) => {
            return chart.colors.getIndex(target.dataItem.index);
        });
        console.log(series);

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
                id="amcharts-chart-div"
                className="amcharts-chart-div"
                //style={{ width: '492px', height: '300px' }}
            ></div>
        );
    }
}

export default ChartBar;
