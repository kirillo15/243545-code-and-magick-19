'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText (text, x, y);
};

var getRandomColors = function () {
  return Math.floor(Math.random() * 256).toFixed(0);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  renderText(ctx, 'Ура вы победили', 130, 50);
  renderText(ctx, 'Список результатов', 130, 70);

  var max = -1;
  for (var i = 0; i < times.length; i++); {
    if (times[i] > max) {
      max = times[i];
    }
  }

var COLLUMN_WIDTH = 40;
var COLLUMN_HEIGHT = 150;
var COLLUMN_SPACE = COLLUMN_WIDTH + 50;
var START_POSITION = 140;
var step = COLLUMN_HEIGHT/max;

  for (var i = 0; i < times.length; i++) {
    var height = step * times[i];
    var histoY = COLLUMN_HEIGHT - height + 100;

    var renderDATA = function () {
      ctx.fillText(names[i], START_POSITION + COLLUMN_SPACE * i, histoY + height + 20);
      ctx.fillText(times[i].toFixed(0), START_POSITION + COLLUMN_SPACE * i, histoY - 10)
    }

    var renderCollumn = function () {
      ctx.fillRect(START_POSITION + COLLUMN_SPACE * i, histoY, COLLUMN_WIDTH, height);
    }

    var colorRe = 'rgba(0, 0,' + getRandomColors() + ',' + 0.2 * (i + 1) + ')';
    if (names[i] === 'Вы') {
      renderDATA();
      ctx.fillStyle = 'red';
      renderCollumn();
    } else {
      ctx.fillStyle = colorRe;
      renderDATA();
      renderCollumn();
    }
  }
};

