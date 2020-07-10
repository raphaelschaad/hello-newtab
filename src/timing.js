// Uncomment to measure the Critical Rendering Path (CRP)
// More information: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
window.addEventListener('load', measureCRP);

function measureCRP() {
  var t = window.performance.timing;
  var interactive = t.domInteractive - t.domLoading;
  var loaded = t.domContentLoadedEventStart - t.domLoading;
  var complete = t.domComplete - t.domLoading;
  console.log('interactive: ' + interactive + 'ms, loaded: ' + loaded + 'ms, complete: ' + complete + 'ms');
}
