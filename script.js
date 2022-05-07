const time = 1000;

function one(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "10";
    callback();
  }, time);
}

function two(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "9";
    callback();
  }, time);
}

function three(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "8";
    callback();
  }, time);
}

function four(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "7";
    callback();
  }, time);
}

function five(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "6";
    callback();
  }, time);
}

function six(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "5";
    callback();
  }, time);
}

function seven(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "4";
    callback();
  }, time);
}

function eight(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "3";
    callback();
  }, time);
}

function nine(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "2";
    callback();
  }, time);
}

function ten(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "1";
    callback();
  }, time);
}

function display(callback) {
  setTimeout(function () {
    document.getElementById("demo").innerHTML = "HAPPY INDEPENDENCE DAY!!!";
    callback();
  }, time);
}

// Lets use all the function and put them one inside another
one(() => {
  two(() => {
    three(() => {
      four(() => {
        five(() => {
          six(() => {
            seven(() => {
              eight(() => {
                nine(() => {
                  ten(() => {
                    display(() => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
