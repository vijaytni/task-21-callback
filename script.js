let counter = document.querySelector(".countdisplay");
let count = 10;
const timeout = 1000;
setTimeout(() => {
  counter.innerText = count--;
  setTimeout(() => {
    counter.innerText = count--;
    setTimeout(() => {
      counter.innerText = count--;
      setTimeout(() => {
        counter.innerText = count--;
        setTimeout(() => {
          counter.innerText = count--;
          setTimeout(() => {
            counter.innerText = count--;
            setTimeout(() => {
              counter.innerText = count--;
              setTimeout(() => {
                counter.innerText = count--;
                setTimeout(() => {
                  counter.innerText = count--;
                  setTimeout(() => {
                    counter.innerText = count--;
                    setTimeout(() => {
                      counter.innerText = new Date();
                    }, timeout);
                  }, timeout);
                }, timeout);
              }, timeout);
            }, timeout);
          }, timeout);
        }, timeout);
      }, timeout);
    }, timeout);
  }, timeout);
}, timeout);