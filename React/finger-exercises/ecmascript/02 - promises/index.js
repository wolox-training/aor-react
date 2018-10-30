// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time >= 1000) {
      throw new Error("This time is too much !");
    } else {
      setTimeout(() => {
        resolve(time);
      }, time);
    }
  });
}

export async function asyncDelay(time) {
  return delay(time);
}
