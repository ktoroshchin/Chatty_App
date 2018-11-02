
module.exports = {
  randomColor: function () {
    const colorList = ['#00e4f6','#ca054d','#a83838','#420420', '#0dead0','#e0b0ff','#b7bd1c','#00e4f6','#d072cc','#0dc93f','#aec167','#ef00ef']
    return colorList[Math.floor(Math.random()*colorList.length)]
  }
}
