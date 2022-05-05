// let date = new Date();
// const dateMethod = {
//   gd(dateObj = date) {
//     return [
//       dateObj.getDay(),
//       (dateObj.getHours() * 60) + dateObj.getMinutes()
//     ];
//   },
//   ghm(minutesValue, dateObj = date) {
//     let numOfMinutes = minutesValue - (date.getHours() * 60);
//     return [, numOfMinutes]
//   },
//   between : function(a, b, includeEndNumbers = false) {
//     var min = Math.min.apply(Math, [a, b]),
//       max = Math.max.apply(Math, [a, b]);
//     return includeEndNumbers ? this >= min && this <= max : this > min && this < max;
//   }
// }
// console.log(gd());

Other:{
  (function () {
    const userSpan_ = document.querySelector("[strong-num]");
    let userCount = 1000;
    const userResponseCount = fetch("https://chrome.google.com/webstore/", {
      "headers" : {}
    }).then((response) => {
      console.log(response);
      JSON.parse(JSON.stringify(response));
    }).then((response) => {
      // idk
    });
    userSpan_.textContent = userCount;
  })();
}

Game:{
function App(callback) {
  var t = {};
  function r(ctxMatrix) {
    if (t[ctxMatrix]) return t[ctxMatrix].exports;
    var workingCanvas = (t[ctxMatrix] = {
      currentArena: ctxMatrix,
      gridMatrix: !1,
      exports: {},
    });
    return (
      callback[ctxMatrix].call(
        workingCanvas.exports,
        workingCanvas,
        workingCanvas.exports,
        r
      ),
      (workingCanvas.gridMatrix = !0),
      workingCanvas.exports
    );
  }
  (r.m = callback),
    (r.c = t),
    (r.mousePos = function (callback, t, ctxMatrix) {
      r.ctxMatrix(callback, t) ||
        Object.defineProperty(callback, t, {
          enumerable: !0,
          get: ctxMatrix,
        });
    }),
    (r.r = function (callback) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(callback, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(callback, "__esModule", {
          value: !0,
        });
    }),
    (r.t = function (callback, t) {
      if ((1 & t && (callback = r(callback)), 8 & t)) return callback;
      if (4 & t && "object" == typeof callback && callback && callback.__esModule) return callback;
      var ctxMatrix = Object.create(null);
      if (
        (r.r(ctxMatrix),
          Object.defineProperty(ctxMatrix, "default", {
            enumerable: !0,
            value: callback,
          }),
          2 & t && "string" != typeof callback)
      )
        for (var workingCanvas in callback)
          r.mousePos(
            ctxMatrix,
            workingCanvas,
            function (t) {
              return callback[t];
            }.bind(null, workingCanvas)
          );
      return ctxMatrix;
    }),
    (r.workingCanvas = function (callback) {
      var t =
        callback && callback.__esModule
          ? function () {
            return callback.default;
          }
          : function () {
            return callback;
          };
      return r.mousePos(t, "currentHighScore", t), t;
    }),
    (r.ctxMatrix = function (callback, t) {
      return Object.prototype.hasOwnProperty.call(callback, t);
    }),
    (r.p = ""),
    r((r.restartImage = 0));
}
App([
  function (callback, t) {
    window.onload = function () {
      (workingCanvas = document.querySelector("canvas")),
        (ctxMatrix = workingCanvas.getContext("2d")),
        (gridMatrix = workingCanvas.width / 10),
        void 0 === localStorage._scoreResetSept2018 &&
        ((localStorage._hscore = currentHighScore = 0),
          (localStorage._scoreResetSept2018 = !0)),
        (function () {
          clearInterval(callback), clearInterval(t);
          try {
            document.removeEventListener("keydown", D),
              document.removeEventListener("keyup", D),
              document.removeEventListener("mousedown", J);
          } catch (callback) {
            console.error(callback);
          }
          !0,
            document.addEventListener("keydown", D),
            document.addEventListener("keyup", D),
            document.addEventListener("mousedown", J),
            document.addEventListener("mousemove", z);
          try {
            hasGameEnded = JSON.parse(localStorage._end);
          } catch (callback) {
            console.error(callback), (hasGameEnded = !1);
          }
          try {
            !(function () {
              try {
                if (hasGameEnded)
                  return (
                    (currentHighScore = JSON.parse(localStorage._hscore)),
                    (currentArena = b(
                      workingCanvas.width / gridMatrix,
                      workingCanvas.height / gridMatrix
                    ).slice(0)),
                    E(),
                    void (hasGameEnded = !1)
                  );
              } catch (callback) {
                console.error(callback), (currentHighScore = 0);
              }
              try {
                null != localStorage._arena &&
                  "undefined" != localStorage._arena &&
                  (currentArena = JSON.parse(localStorage._arena));
              } catch (callback) {
                console.error(callback);
              } finally {
                null == currentArena &&
                  (currentArena = b(
                    workingCanvas.width / gridMatrix,
                    workingCanvas.height / gridMatrix
                  ));
              }
              try {
                null == localStorage._hscore ||
                  "undefined" == localStorage._hscore
                  ? (highScore = localStorage._hscore = 0)
                  : (highScore = JSON.parse(localStorage._hscore)),
                  (currentScore =
                    null == localStorage._score ||
                      "undefined" == localStorage._score
                      ? (localStorage._score = 0)
                      : JSON.parse(localStorage._score)),
                  (N = JSON.parse(localStorage._player));
              } catch (callback) {
                console.error(callback);
              }
            })();
          } catch (callback) {
            console.error(callback);
          }
          (restartImage = new Image()),
            (restartImage.src = "../images/restart.png"),
            (pauseImage = new Image()),
            (pauseImage.src = "../images/pause.png"),
            (playImage = new Image()),
            (playImage.src = "../images/play.png");
          var callback = setInterval(C, 50),
            t = setInterval(P, 1e3 / 12);
          null == N && E();
          requestAnimationFrame(createGameArena);
        })();
    };
    //const r = [null, "#e84a4a", "#e89c4a", "#e8db4a", "#9ce84a", "#4ae86c", "#4ae8c6", "#4a89e8"];
    const colors = [
      null,
      "#ff8fb4",
      "#87ffc9",
      "#ffb169",
      "#ffe987",
      "#87a3ff",
      "#c587ff",
      "#91f6ff",
    ];
    (shapes = [
      [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ],
      [
        [2, 2],
        [2, 2],
      ],
      [
        [0, 0, 3, 0],
        [0, 0, 3, 0],
        [0, 0, 3, 0],
        [0, 0, 3, 0],
      ],
      [
        [0, 4, 0],
        [0, 4, 0],
        [0, 4, 4],
      ],
      [
        [0, 5, 0],
        [0, 5, 0],
        [5, 5, 0],
      ],
      [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0],
      ],
      [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
      ],
    ]),
      (speed = 10);
    let ctxMatrix,
      workingCanvas,
      gridMatrix,
      currentArena,
      currentHighScore,
      restartImage,
      pauseImage,
      playImage,
      c,
      currentScore = 0,
      hasGameEnded = !1,
      mousePos = localStorage.mouse
        ? JSON.parse(localStorage.mouse)
        : {
          x: 0,
          y: 0,
        },
      y = !1,
      p = !1,
      S = 0;
    let x = 0,
      v = 0,
      m = 0,
      w = 50 * speed;
    function createGameArena(callback = 0) {
      if (
        (hasGameEnded &&
          (function () {
            let callback = "You hit the limit!",
              t = 0.05 * gridMatrix;
            (ctxMatrix.font = gridMatrix + "px monospace"),
              (ctxMatrix.fillStyle = "#ff5b5b"),
              ctxMatrix.fillText(
                callback,
                workingCanvas.width / 2 -
                ctxMatrix.measureText(callback).width / 2 +
                t,
                8 * gridMatrix + t
              );
            let r = "Press any key to restart";
            (ctxMatrix.font = 0.7 * gridMatrix + "px monospace"),
              (ctxMatrix.fillStyle = "#ff5b5b"),
              ctxMatrix.fillText(
                r,
                workingCanvas.width / 2 -
                ctxMatrix.measureText(r).width / 2 +
                t,
                9 * gridMatrix + t
              ),
              (ctxMatrix.font = gridMatrix + "px monospace"),
              (ctxMatrix.fillStyle = "red"),
              ctxMatrix.fillText(
                callback,
                workingCanvas.width / 2 - ctxMatrix.measureText(callback).width / 2,
                8 * gridMatrix
              ),
              (ctxMatrix.font = 0.7 * gridMatrix + "px monospace"),
              (ctxMatrix.fillStyle = "red"),
              ctxMatrix.fillText(
                r,
                workingCanvas.width / 2 - ctxMatrix.measureText(r).width / 2,
                9 * gridMatrix
              );
          })(),
          (ctxMatrix.fillStyle = "black"),
          ctxMatrix.fillRect(0, 0, workingCanvas.width, workingCanvas.height),
          (ctxMatrix.fillStyle = "red"),
          ctxMatrix.fillRect(0, 3 * gridMatrix - 1, workingCanvas.width, 4),
          O(currentArena, {
            x: 0,
            y: 0,
          }),
          O(N.shape, {
            x: N.x,
            y: N.y,
          }),
          F(),
          (x = callback - v),
          (v = callback),
          (m += x),
          m > w && !hasGameEnded && !p && (I(), (m = 0)),
          null == currentHighScore)
      )
        try {
          currentHighScore = localStorage._hscore;
        } catch (callback) {
          console.error(callback);
        }
      null == currentHighScore && (currentHighScore = 0),
        (ctxMatrix.font = 2 * gridMatrix + "px monospace"),
        (ctxMatrix.fillStyle = "#fff"),
        ctxMatrix.fillText(
          currentScore,
          workingCanvas.width / 2 -
          ctxMatrix.measureText(currentScore).width / 2,
          2.5 * gridMatrix
        ),
        (ctxMatrix.font = 0.5 * gridMatrix + "px monospace"),
        (ctxMatrix.fillStyle = "#fff"),
        ctxMatrix.fillText(
          "High score: " + currentHighScore,
          workingCanvas.width / 2 -
          ctxMatrix.measureText("High score: " + currentHighScore).width / 2,
          3.5 * gridMatrix
        ),
        (function () {
          (this.offset = 1),
            (this.hoverSize = gridMatrix / 5),
            mousePos.x > gridMatrix * this.offset - this.hoverSize &&
              mousePos.x <
              gridMatrix * this.offset + gridMatrix + 2 * this.hoverSize &&
              mousePos.y > gridMatrix * this.offset - this.hoverSize &&
              mousePos.y <
              gridMatrix * this.offset + gridMatrix + 2 * this.hoverSize
              ? ((y = !0),
                (ctxMatrix.fillStyle = "#3a3a3a"),
                ctxMatrix.fillRect(
                  gridMatrix * this.offset - this.hoverSize,
                  gridMatrix * this.offset - this.hoverSize,
                  gridMatrix + 2 * this.hoverSize,
                  gridMatrix + 2 * this.hoverSize
                ))
              : (y = !1);
          ctxMatrix.drawImage(
            restartImage,
            gridMatrix * this.offset,
            gridMatrix * this.offset,
            gridMatrix,
            gridMatrix
          );
        })(),
        (function () {
          (this.offsetX = 8),
            (this.offsetY = 1),
            (this.hoverSize = gridMatrix / 5),
            mousePos.x > gridMatrix * this.offsetX - this.hoverSize &&
              mousePos.x < gridMatrix * this.offsetX + gridMatrix + offsetX &&
              mousePos.y > gridMatrix * this.offsetY - this.hoverSize &&
              mousePos.y < gridMatrix * this.offsetY + gridMatrix + offsetY
              ? ((c = !0),
                (ctxMatrix.fillStyle = "#3a3a3a"),
                ctxMatrix.fillRect(
                  gridMatrix * this.offsetX - this.hoverSize,
                  gridMatrix * this.offsetY - this.hoverSize,
                  gridMatrix + 2 * this.hoverSize,
                  gridMatrix + 2 * this.hoverSize
                ))
              : (c = !1);
          const callback = p ? playImage : pauseImage;
          ctxMatrix.drawImage(
            callback,
            gridMatrix * this.offsetX,
            gridMatrix * this.offsetY,
            gridMatrix,
            gridMatrix
          );
        })(),
        (function () {
          for (let callback = currentArena.length - 1; callback >= 0; callback--)
            currentArena[callback].every((callback) => callback > 0) &&
              (currentArena.splice(callback, 1),
                currentArena.splice(
                  0,
                  0,
                  new Array(currentArena[1].length).fill(0)
                ),
                (currentScore += S),
                (S *= 2));
        })(),
        requestAnimationFrame(createGameArena);
    }
    function b(callback, t) {
      let r = [];
      for (; t--;) r.push(new Array(callback).fill(0));
      return r;
    }
    function O(callback, t) {
      for (let workingCanvas = 0; workingCanvas < callback.length; workingCanvas++)
        for (
          let currentArena = 0;
          currentArena < callback[workingCanvas].length;
          currentArena++
        )
          0 !== callback[workingCanvas][currentArena] &&
            ((ctxMatrix.fillStyle = colors[callback[workingCanvas][currentArena]]),
              ctxMatrix.fillRect(
                (t.x + currentArena) * gridMatrix,
                (t.y + workingCanvas) * gridMatrix,
                gridMatrix,
                gridMatrix
              ));
    }
    function k(callback, t) {
      for (let t = 0; t < callback.length; ++t)
        for (let r = 0; r < t; ++r) [callback[r][t], callback[t][r]] = [callback[t][r], callback[r][t]];
      t > 0 ? callback.forEach((callback) => callback.reverse()) : callback.reverse();
    }
    function F() {
      try {
        currentScore > currentHighScore &&
          ((currentHighScore = currentScore),
            (localStorage._hscore = JSON.stringify(currentHighScore))),
          (localStorage._end = JSON.stringify(hasGameEnded)),
          (localStorage._score = JSON.stringify(currentScore)),
          (localStorage._arena = JSON.stringify(currentArena)),
          (localStorage._player = JSON.stringify(N));
      } catch (callback) { }
    }
    function z(callback) {
      const t = window.getComputedStyle(workingCanvas),
        r = parseInt(t.width),
        ctxMatrix = parseInt(t.height),
        gridMatrix = workingCanvas.width / r,
        currentArena = workingCanvas.height / ctxMatrix;
      let currentHighScore = workingCanvas.getBoundingClientRect();
      (mousePos.x = (callback.clientX - currentHighScore.left) * gridMatrix),
        (mousePos.y = (callback.clientY - currentHighScore.top) * currentArena),
        localStorage.setItem("mouse", JSON.stringify(mousePos));
    }
    function J(callback) {
      y ? Y(!0) : c && ((p = !p), (up = L = j = X = !1));
    }
    var N = {
      start_x: 5,
      x: 5,
      y: 0,
      shape: shapes[Math.round(Math.random() * (shapes.length - 1))],
    };
    function T() {
      let callback = N.shape;
      for (let t = 0; t < callback.length; t++)
        for (let r = 0; r < callback[t].length; r++)
          if (
            0 !== callback[t][r] &&
            currentArena[N.y + t] &&
            0 !== currentArena[N.y + t][N.x + r]
          )
            return !0;
      return !1;
    }
    function I() {
      if (
        ((m = 0),
          N.y + N.shape.length - 1 - A(N.shape) < 0 && (N.x = N.start_x),
          N.x + N.shape.length - 1 - M(N.shape) > currentArena[0].length - 1 &&
          (N.x = currentArena[0].length - N.shape.length + M(N.shape)),
          N.x + R(N.shape) < 0 && (N.x = 0 - R(N.shape)),
          N.y++,
          T() || N.y > currentArena.length - N.shape.length + A(N.shape))
      ) {
        if (
          ((currentScore += 10),
            N.y--,
            (function (callback, t) {
              const r = callback.shape;
              for (let ctxMatrix = 0; ctxMatrix < r.length; ctxMatrix++)
                for (
                  let workingCanvas = 0;
                  workingCanvas < r.length;
                  workingCanvas++
                )
                  if (
                    r[ctxMatrix][workingCanvas] &&
                    0 !== r[ctxMatrix][workingCanvas]
                  )
                    try {
                      t[callback.y + ctxMatrix][callback.x + workingCanvas] =
                        r[ctxMatrix][workingCanvas];
                    } catch (callback) {
                      console.error(callback);
                    }
            })(N, currentArena),
            (function (callback) {
              let t = 0;
              return (
                callback.forEach((callback) => {
                  t += callback;
                }),
                t
              );
            })(currentArena[2]) > 0)
        )
          return (
            O(currentArena, {
              x: 0,
              y: 0,
            }),
            (hasGameEnded = !0),
            void Y(!1)
          );
        E();
      }
    }
    function E() {
      (N.shape = shapes[Math.round(Math.random() * (shapes.length - 1))]),
        (N.y = -N.shape.length + A(N.shape)),
        (N.x = 5 - Math.round(N.shape.length / 2)),
        (N.start_x = N.x),
        (S = 75);
    }
    function A(callback) {
      let t = 0;
      for (let r = callback.length - 1; r >= 0; r--) {
        for (let ctxMatrix = 0; ctxMatrix < callback[r].length; ctxMatrix++)
          if (0 !== callback[r][ctxMatrix]) return t;
        t++;
      }
      return t;
    }
    function M(callback) {
      let t = 0;
      for (let r = callback.length - 1; r >= 0; r--) {
        for (let ctxMatrix = 0; ctxMatrix < callback.length; ctxMatrix++)
          if (0 !== callback[ctxMatrix][r]) return t;
        t++;
      }
      return t;
    }
    function R(callback) {
      let t = 0;
      for (let r = 0; r < callback.length; r++) {
        for (let ctxMatrix = 0; ctxMatrix < callback.length; ctxMatrix++)
          if (0 !== callback[ctxMatrix][r]) return t;
        t++;
      }
      return t;
    }
    function Y(callback) {
      (j = L = X = !1),
        F(),
        (hasGameEnded = !0),
        (localStorage._end = JSON.stringify(hasGameEnded)),
        (localStorage._arena = JSON.stringify(
          b(
            workingCanvas.width / gridMatrix,
            workingCanvas.height / gridMatrix
          ).slice(0)
        )),
        callback && location.reload();
    }
    var j = !1,
      L = !1,
      X = !1;
    function C() {
      L && !p && ((currentScore += 1), I());
    }
    function P() {
      j && !p ? (N.x--, T() && N.x++) : X && !p && (N.x++, T() && N.x--);
    }
    function D(callback) {
      if (hasGameEnded) Y(!0);
      else {
        if (p) return;
        if ("keydown" == callback.type)
          switch (callback.keyCode) {
            case 87:
            case 38:
              !(function (callback) {
                const t = N.x;
                let r = 1;
                for (k(N.shape, callback); T();)
                  if (
                    ((N.x += r),
                      (r = -(r + (r > 0 ? 1 : -1))),
                      r > N.shape[0].length)
                  )
                    return k(N.shape, -callback), void (N.x = t);
              })(1);
              break;
            case 65:
            case 37:
              if (N.y + N.shape.length - A(N.shape) < 0) break;
              j = !0;
              break;
            case 83:
            case 40:
              L = !0;
              break;
            case 68:
            case 39:
              if (N.y + N.shape.length - A(N.shape) < 0) break;
              X = !0;
              break;
            case 27:
              localStorage.mouse = JSON.stringify({
                x: -10,
                y: -10,
              });
          }
        else if ("keyup" == callback.type)
          switch (callback.keyCode) {
            case 65:
            case 37:
              j = !1;
              break;
            case 83:
            case 40:
              L = !1;
              break;
            case 68:
            case 39:
              X = !1;
          }
      }
    }
  },
]);
}