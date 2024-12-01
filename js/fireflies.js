var total = 15,
  container = document.querySelector(".fireflies-container"),
  w = window.innerWidth,
  h = window.innerHeight,
  Tweens = [],
  SPs = 1;

for (var i = total; i--; ) {
  var Div = document.createElement("div");
  TweenLite.set(Div, {
    attr: { class: "firefly" },
    x: R(w),
    y: R(h),
    opacity: 0,
  });
  container.appendChild(Div);
  Anim(Div);
  Tweens.push(Div);
}

function Anim(elm) {
  elm.Tween = TweenLite.to(elm, R(20) + 10, {
    bezier: {
      values: [
        { x: R(w), y: R(h) },
        { x: R(w), y: R(h) },
      ],
    },
    opacity: R(1),
    scale: R(1) + 0.5,
    delay: R(5),
    onComplete: Anim,
    onCompleteParams: [elm],
  });
}

function R(max) {
  return Math.random() * max;
}

window.addEventListener("resize", resize);
function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
}
