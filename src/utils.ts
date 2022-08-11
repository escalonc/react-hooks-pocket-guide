export function logTime(start: number, end: number) {
  const time = Math.round((end - start) * 100) / 100;
  console.log(`Call to doSomething took ${time} milliseconds.`);

  const label = document.getElementById("rendering-time");

  if (label) {
    console.log(`Call to doSomething took ${time} milliseconds.`);
    label.innerText = ` Rendering time: ${time} milliseconds`;
  }
}
