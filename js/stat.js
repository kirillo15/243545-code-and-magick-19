'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TOP_OFFSET = 100;
var COLLUMN_WIDTH = 40;
var COLLUMN_HEIGHT = 150;
var COLLUMN_SPACE = COLLUMN_WIDTH + 50;
var START_POSITION = 140;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText (text, x, y);
};


var getMaxElement = function (arr) {//найти максимальный элемент
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
var renderDATA = function (ctx, name, time, number, height, hisToY) {
  var namePadding = 20;
  var timePadding = 10;
  ctx.fillText(name, START_POSITION + COLLUMN_SPACE * number, hisToY + height + namePadding);
  ctx.fillText(time, START_POSITION + COLLUMN_SPACE * number, hisToY - timePadding)
}

var renderCollumn = function (ctx, number, height, hisToY) {
  ctx.fillRect(START_POSITION + COLLUMN_SPACE * number, hisToY, COLLUMN_WIDTH, height);
}

var getRandomColors = function() {
  return Math.floor(Math.random() * 256).toFixed(0);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  renderText(ctx, 'Ура вы победили', 130, 50);
  renderText(ctx, 'Список результатов', 130, 70);

  var maxTime = getMaxElement(times);


  var step = COLLUMN_HEIGHT/maxTime;

  for (var i = 0; i < times.length; i++) {
    var height = step * times[i];
    var hisToY = COLLUMN_HEIGHT - height + TOP_OFFSET;


    var colorRe = 'rgba(0, 0,' + getRandomColors() + ',' + 0.2 * (i + 1) + ')';
    if (names[i] === 'Вы') {
      renderDATA(ctx, names[i], times[i].toFixed(0), i, height, hisToY);

      ctx.fillStyle = 'red';
      renderCollumn(ctx, i, height, hisToY);
    } else {
      ctx.fillStyle = colorRe;
      renderDATA(ctx, names[i], times[i].toFixed(0), i, height, hisToY);
      renderCollumn(ctx, i, height, hisToY);

    }
  }
}
