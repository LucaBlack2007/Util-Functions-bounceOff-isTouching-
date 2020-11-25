function isTouching(a, b) {
    var averageWidth = (a.width / 2) + (b.width / 2);
    var averageHeight = (a.height / 2) + (b.height / 2);
    if (abs(a.x - b.x) < averageWidth && abs(a.y - b.y) < averageHeight) {
      return true;
    } else {
      return false;
    }
}
function bounceOff(a,b) {
  if (a.x - b.x < b.width / 2 + a.width / 2 && b.x - a.x < b.width / 2 + a.width / 2) {
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
  }
  if (a.y - b.y < b.height / 2 + a.height / 2 && b.y - a.y < b.height / 2 + a.height / 2) {
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
  }
}