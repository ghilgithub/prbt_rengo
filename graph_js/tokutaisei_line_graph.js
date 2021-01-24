window.onload = function () {

  var formatDateStr = "YYYY年M月D日";
  
  var dateChart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true, //グラフのアニメーション化
    theme: "light2",
    /*title:{
      text: "Graph：グラフ"
    },*/
    axisX:{
      interval: 1,
      intervalType: "month",
      interlacedColor: "#e2f1ff",
      snapToDataPoint: false,
      tickLength: 7, //表外に飛び出す目盛りの長さ
      tickColor: "white", //表外に飛び出す目盛りの色
      labelAngle: 1, //labelの傾き具合
      labelFormatter: axisXformat,
      //valueFormatString: "YYYY年 M月",
      crosshair: {
        enabled: true,
        snapToDataPoint: false,
        labelFormatter: function (e) {
          return CanvasJS.formatDate( e.value, "YYYY年M月");
        },
      },
      stripLines: [{
          value: 1451574000000, //2016/1/1
          thickness: 1,
          color: "Slate Grey",
        },{
          value: 1467298800000, //2016/7/1
          thickness: 1,
          lineDashType: "dash",
          color: "Slate Grey",
        },{
          value: 1483196400000, //2017/1/1
          thickness: 1,
          color: "Slate Grey",
        },{
          value: 1498834800000, //2017/7/1
          thickness: 1,
          lineDashType: "dash",
          color: "Slate Grey",
        },{
          value: 1514732400000, //2018/1/1
          thickness: 1,
          color: "Slate Grey",
        },{
          value: 1530370800000, //2018/7/1
          thickness: 1,
          lineDashType: "dash",
          color: "Slate Grey",
        },{
          value: 1546268400000, //2019/1/1
          thickness: 1,
          color: "Slate Grey",
        },{
          value: 1561906800000, //2019/7/1
          thickness: 1,
          lineDashType: "dash",
          color: "Slate Grey",
        },{
          value: 1577804400000, //2020/1/1
          thickness: 1,
          color: "Slate Grey",
        },{
          value: 1593529200000, //2020/7/1
          thickness: 1,
          lineDashType: "dash",
          color: "Slate Grey",
        },{
          value: 1609426800000, //2021/1/1
          thickness: 1,
          color: "Slate Grey",
        },{
          value: 1625065200000, //2021/7/1
          thickness: 1,
          lineDashType: "dash",
          color: "Slate Grey",
        }
      ],
    },
    axisY: {
      maximum: 15,
      minimum: -6,
      interval: 5,
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: axisYformat,
      },
      stripLines:[{
          value: -4,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: -3,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: -2,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: -1,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 1,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 2,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 3,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 4,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 6,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 7,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 8,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 9,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 11,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 12,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 13,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        },{
          value: 14,
          thickness: 1,
          lineDashType: "dot",
          color: "Slate Grey",
        }
      ],
    },
    toolTip: {
        shared : true, //ToolTipを共有する
    },
    legend:{
      cursor:"pointer",
      fontSize: 11,
      //fontFamily: "Ruda",
      verticalAlign: "bottom",
      horizontalAlign: "left",
      dockInsidePlotArea: false,
      itemclick: legendClick,
    },
    data: [{
      name: "着流きるお",
      legendText: "着流きるお",
      color: "black",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 1, 24), y: 11 },
        { x: chartDate(2020, 2, 1), y: 12 },
        { x: chartDate(2020, 2, 7), y: 11 },
        { x: chartDate(2020, 2, 14), y: 12 },
        { x: chartDate(2020, 2, 21), y: 12 },
        { x: chartDate(2020, 3, 28), y: 13 },
        { x: chartDate(2020, 5, 1), y: 12 },
        { x: chartDate(2020, 5, 15), y: 11 },
        { x: chartDate(2020, 5, 22), y: 11 },
        { x: chartDate(2020, 5, 29), y: 12 },
        { x: chartDate(2020, 6, 5), y: 13 },
        { x: chartDate(2020, 9, 19), y: 14 },
        { x: chartDate(2020, 9, 26), y: 13 },
        { x: chartDate(2020, 10, 10), y: 12 },
        { x: chartDate(2020, 10, 17), y: 13 },
        { x: chartDate(2020, 10, 24), y: 12 },
        { x: chartDate(2020, 11, 21), y: 13 },
        { x: chartDate(2020, 11, 28), y: 12 },
        { x: chartDate(2020, 12, 5), y: 13 },
        { x: chartDate(2020, 12, 19), y: 12 },
        { x: chartDate(2020, 12, 26), y: 13 },
        { x: chartDate(2021, 1, 8), y: 14 },
        { x: chartDate(2021, 1, 22), y: 14 },
      ]
    },{
      name: "もりりん",
      legendText: "もりりん",
      color: "purple",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 1, 4), y: 4 },
        { x: chartDate(2020, 1, 8), y: 4 },
        { x: chartDate(2020, 1, 12), y: 5 },
        { x: chartDate(2020, 1, 14), y: 5 },
        { x: chartDate(2020, 2, 1), y: 5 },
        { x: chartDate(2020, 3, 5), y: 5 },
        { x: chartDate(2020, 3, 28), y: 6 },
        { x: chartDate(2020, 4, 2), y: 7 },
        { x: chartDate(2020, 4, 17), y: 8 },
        { x: chartDate(2020, 8, 29), y: 8 },
        { x: chartDate(2020, 9, 19), y: 9 },
        { x: chartDate(2020, 12, 12), y: 10 },
        { x: chartDate(2021, 1, 1), y: 10 },
      ]
    },
    {
      name: "えぬ",
      legendText: "えぬ",
      color: "blue",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2019, 12, 17), y: -5 },
        { x: chartDate(2020, 1, 18), y: -5 },
        { x: chartDate(2020, 2, 1), y: -4 },
        { x: chartDate(2020, 2, 9), y: -4 },
        { x: chartDate(2020, 4, 2), y: -4 },
        { x: chartDate(2020, 4, 17), y: -3 },
        { x: chartDate(2020, 5, 8), y: -3 },
        { x: chartDate(2020, 5, 15), y: -3 },
        { x: chartDate(2020, 6, 12), y: -3 },
        { x: chartDate(2020, 7, 11), y: -2 },
        { x: chartDate(2020, 8, 1), y: -1 },
        { x: chartDate(2020, 8, 15), y: 1 },
        { x: chartDate(2020, 9, 26), y: 1 },
        { x: chartDate(2020, 10, 3), y: 1 },
        { x: chartDate(2020, 11, 21), y: 1 },
        { x: chartDate(2020, 12, 12), y: 2 },
        { x: chartDate(2021, 1, 8), y: 2 },
        { x: chartDate(2021, 1, 22), y: 3 },
      ]
    },
    {
      name: "ギル",
      legendText: "ギル",
      color: "mediumturquoise",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 7, 18), y: -5 },
        { x: chartDate(2020, 7, 25), y: -4 },
        { x: chartDate(2020, 8, 15), y: -5 },
        { x: chartDate(2020, 8, 29), y: -4 },
        { x: chartDate(2020, 9, 26), y: 1 },
        { x: chartDate(2020, 10, 3), y: 1 },
        { x: chartDate(2020, 10, 24), y: 1 },
        { x: chartDate(2020, 12, 12), y: 1 },
        { x: chartDate(2020, 12, 19), y: 2 },
        { x: chartDate(2021, 1, 1), y: 3 },
        { x: chartDate(2021, 1, 8), y: 3 },
        { x: chartDate(2021, 1, 22), y: 3 },
      ]
    },
    {
      name: "京のさち",
      legendText: "京のさち",
      color: "red",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 2, 1), y: -5 },
        { x: chartDate(2020, 2, 8), y: -4 },
        { x: chartDate(2020, 4, 2), y: -3 },
        { x: chartDate(2020, 4, 17), y: -2 },
        { x: chartDate(2020, 4, 24), y: -2 },
        { x: chartDate(2020, 5, 15), y: -1 },
        { x: chartDate(2020, 6, 12), y: -1 },
        { x: chartDate(2020, 6, 27), y: -1 },
        { x: chartDate(2020, 8, 15), y: -2 },
        { x: chartDate(2020, 8, 29), y: -1 },
        { x: chartDate(2020, 9, 26), y: -1 },
        { x: chartDate(2020, 10, 3), y: -1 },
        { x: chartDate(2020, 10, 24), y: 1 },
        { x: chartDate(2020, 12, 5), y: 1 },
        { x: chartDate(2020, 12, 12), y: 2 },
        { x: chartDate(2020, 12, 19), y: 2 },
      ]
    },
    {
      name: "はっしー",
      legendText: "はっしー",
      color: "dimgray",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 6, 12), y: -5 },
        { x: chartDate(2020, 7, 4), y: -5 },
        { x: chartDate(2020, 7, 18), y: -4 },
        { x: chartDate(2020, 7, 25), y: -3 },
        { x: chartDate(2020, 8, 15), y: -3 },
        { x: chartDate(2020, 8, 29), y: -3 },
        { x: chartDate(2020, 9, 19), y: -2 },
        { x: chartDate(2020, 9, 26), y: -2 },
        { x: chartDate(2020, 10, 3), y: -2 },
        { x: chartDate(2020, 10, 10), y: -1 },
        { x: chartDate(2020, 10, 24), y: -1 },
        { x: chartDate(2020, 11, 21), y: -1 },
        { x: chartDate(2020, 12, 12), y: -1 },
        { x: chartDate(2020, 12, 19), y: -1 },
        { x: chartDate(2021, 1, 1), y: 1 },
      ]
    },
    {
      name: "草臥男",
      legendText: "草臥男",
      color: "darkgreen",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 7, 18), y: -5 },
        { x: chartDate(2020, 8, 15), y: -5 },
        { x: chartDate(2020, 8, 29), y: -5 },
        { x: chartDate(2020, 9, 19), y: -4 },
        { x: chartDate(2020, 10, 3), y: -2 },
        { x: chartDate(2020, 10, 24), y: -2 },
        { x: chartDate(2020, 12, 12), y: -2 },
        { x: chartDate(2020, 12, 19), y: -2 },
        { x: chartDate(2021, 1, 1), y: -1 },
        { x: chartDate(2021, 1, 8), y: -1 },
        { x: chartDate(2021, 1, 22), y: 1 },
      ]
    },
    {
      name: "メガネ君",
      legendText: "メガネ君",
      color: "saddlebrown",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 2, 1), y: -5 },
        { x: chartDate(2020, 2, 5), y: -5 },
        { x: chartDate(2020, 2, 18), y: -4 },
        { x: chartDate(2020, 3, 1), y: -3 },
        { x: chartDate(2020, 4, 2), y: -3 },
        { x: chartDate(2020, 5, 8), y: -3 },
        { x: chartDate(2020, 5, 15), y: -2 },
        { x: chartDate(2020, 6, 5), y: -2 },
        { x: chartDate(2020, 7, 11), y: -3 },
        { x: chartDate(2020, 9, 26), y: -3 },
        { x: chartDate(2020, 12, 12), y: -2 },
        { x: chartDate(2020, 12, 19), y: -2 },
        { x: chartDate(2021, 1, 1), y: -1 },
      ]
    },
    {
      name: "ときぽんぬ",
      legendText: "ときぽんぬ",
      color: "purple",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 2, 19), y: -5 },
        { x: chartDate(2020, 3, 5), y: -5 },
        { x: chartDate(2020, 3, 28), y: -4 },
        { x: chartDate(2020, 4, 24), y: -2 },
        { x: chartDate(2020, 5, 15), y: -3 },
        { x: chartDate(2020, 5, 22), y: -3 },
        { x: chartDate(2020, 8, 22), y: -3 },
        { x: chartDate(2020, 9, 23), y: -2 },
        { x: chartDate(2020, 12, 5), y: -2 },
        { x: chartDate(2021, 1, 1), y: -2 },
      ]
    },
    {
      name: "ウインド",
      legendText: "ウインド",
      color: "lime",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 3, 14), y: -5 },
        { x: chartDate(2020, 4, 2), y: -4 },
        { x: chartDate(2020, 5, 1), y: -4 },
        { x: chartDate(2020, 5, 15), y: -4 },
        { x: chartDate(2020, 5, 22), y: -3 },
        { x: chartDate(2020, 6, 20), y: -3 },
        { x: chartDate(2020, 7, 4), y: -3 },
        { x: chartDate(2020, 7, 25), y: -2 },
        { x: chartDate(2020, 8, 15), y: -3 },
        { x: chartDate(2020, 8, 22), y: -3 },
        { x: chartDate(2020, 9, 12), y: -2 },
        { x: chartDate(2020, 9, 26), y: -2 },
        { x: chartDate(2020, 10, 3), y: -2 },
        { x: chartDate(2020, 11, 28), y: -2 },
        { x: chartDate(2020, 12, 12), y: -2 },
        { x: chartDate(2021, 1, 1), y: -2 },
        { x: chartDate(2021, 1, 8), y: -2 },
        { x: chartDate(2021, 1, 22), y: -2 },
      ]
    },
    {
      name: "空想男子",
      legendText: "空想男子",
      color: "navy",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 5, 8), y: -5 },
        { x: chartDate(2020, 5, 15), y: -5 },
        { x: chartDate(2020, 5, 29), y: -4 },
        { x: chartDate(2020, 6, 20), y: -3 },
        { x: chartDate(2020, 9, 19), y: -3 },
        { x: chartDate(2020, 10, 3), y: -3 },
        { x: chartDate(2020, 10, 17), y: -2 },
      ]
    },
    {
      name: "すなもよう",
      legendText: "すなもよう",
      color: "gold",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 8, 1), y: -5 },
        { x: chartDate(2020, 8, 15), y: -4 },
        { x: chartDate(2020, 9, 12), y: -4 },
        { x: chartDate(2020, 9, 26), y: -3 },
        { x: chartDate(2020, 10, 3), y: -3 },
        { x: chartDate(2020, 10, 24), y: -3 },
        { x: chartDate(2020, 11, 28), y: -2 },
        { x: chartDate(2020, 12, 12), y: -2 },
        { x: chartDate(2021, 1, 1), y: -2 },
        { x: chartDate(2021, 1, 8), y: -2 },
        { x: chartDate(2021, 1, 22), y: -2 },
      ]
    },
    {
      name: "かなで",
      legendText: "かなで",
      color: "darkorange",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 9, 12), y: -5 },
        { x: chartDate(2020, 9, 26), y: -5 },
        { x: chartDate(2020, 10, 3), y: -4 },
        { x: chartDate(2020, 10, 17), y: -3 },
        { x: chartDate(2020, 11, 21), y: -2 },
        { x: chartDate(2020, 12, 12), y: -2 },
        { x: chartDate(2021, 1, 8), y: -2 },
        { x: chartDate(2021, 1, 22), y: -2 },
      ]
    },
    {
      name: "杏和",
      legendText: "杏和",
      color: "hotpink",
      markerType: "circle",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2020, 7, 11), y: -5 },
        { x: chartDate(2020, 8, 15), y: -4 },
        { x: chartDate(2020, 9, 26), y: -3 },
        { x: chartDate(2020, 10, 24), y: -4 },
        { x: chartDate(2020, 11, 21), y: -4 },
      ]
    },
    {
      name: "プロキオン",
      legendText: "プロキオン",
      color: "black",
      markerType: "square",
      type: "line",
      showInLegend: true,
      xValueFormatString: formatDateStr,
      dataPoints: [
        { x: chartDate(2021, 1, 8), y: -5 },
      ]
    }]
  });
  dateChart.render();
  
  function legendClick(e){
    /* 表示非表示を変更 */
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else{
      e.dataSeries.visible = true;
    }
    /* chartのmaximumを変動させる */
    var ownVisible = e.dataSeries.visible;
    var ownName = e.dataSeries.name;
    var maxRank = 0;
    for (var i = 0; i < dateChart.data.length; i++){
    if ((dateChart.data[i].get("visible") && ownName != dateChart.data[i].get("name"))||(ownVisible && ownName == dateChart.data[i].get("name"))){
      for (var j = 0; j < dateChart.data[i].get("dataPoints").length; j++){
        if (maxRank < dateChart.data[i].get("dataPoints")[j].y){
          maxRank = dateChart.data[i].get("dataPoints")[j].y;
        }
      }
    }
    }
    if (maxRank >= 11){
      dateChart.axisY[0].set("maximum", 15);
    } else if (maxRank >= 6){
      dateChart.axisY[0].set("maximum", 10);
    } else if (maxRank >= 1){
      dateChart.axisY[0].set("maximum", 5);
    } else {
      dateChart.axisY[0].set("maximum", 0);
    }
    dateChart.render();
  }
  
  function axisXformat(e) {
    var month = CanvasJS.formatDate( e.value, "M");
    if (month == 1) {
      return CanvasJS.formatDate( e.value, "YYYY年");
    } else {
      return "";
    }
  }
  
  function axisYformat(e) {
    switch (e.value){
    case -1:
      return "１級";
    case -2:
      return "２級";
    case -3:
      return "３級";
    case -4:
      return "４級";
    case -5:
      return "５級";
    case 1:
      return "初段";
    case 2:
      return "２段";
    case 3:
      return "３段";
    case 4:
      return "４段";
    case 5:
      return "５段";
    case 6:
      return "６段";
    case 7:
      return "７段";
    case 8:
      return "８段";
    case 9:
      return "９段";
    case 10:
      return "☆０";
    case 11:
      return "☆１";
    case 12:
      return "☆２";
    case 13:
      return "☆３";
    case 14:
      return "☆４";
    case 15:
      return "☆５";
    default:
      return "???";
    }
  }
  
  function chartDate(year, month, day){
    return new Date(year, month-1, day);
  }
  
}