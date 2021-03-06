//import {CANVAS_DEFAULT_WIDTH, CANVAS_DEFAULT_HEIGHT} from '../coin_canvas_es6/common/const.js';
//var COIN_CONST = require('../common/const.js');
//var draw = require('../common/draw');
//var score = require('../common/score');
import * as COIN_CONST from '../common/const.js';
import draw from '../canvas/draw';
import score from '../common/score';


var coinImage = new Image();
coinImage.src = './img/ele.png';

// 生成金币
class RMB {
  constructor() {
    this.type = 'rmb';
    // 半径大小
    this.radius = (Math.random() * 20) + 10;
    this.money = this.radius < 20 ? 3 : 1;
    // 下降的速度
    this.speed = (Math.random() * 3) + 1;
    if (this.speed > 3) this.money += 2;

    // 水平方向的位置
    this.x = (Math.random() * (COIN_CONST.CANVAS_DEFAULT_WIDTH) - this.radius * 2);
    if (this.x < this.radius) {
      this.x = this.radius;
    }
    this.y = 0;
    this.remove = false;
  }

  updateElement() {
    this.y += this.speed;
    if (this.y > COIN_CONST.CANVAS_DEFAULT_HEIGHT + 10) {
      score.escaped += this.money;
      this.remove = true;
    }
  }

  render() {
    draw.image(coinImage, this.x, this.y, this.radius * 2, this.radius * 2);
  }
}

export default RMB;
