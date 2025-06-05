// calculation.worker.js
self.onmessage = function(e) {
    if (e.data === 'startCalculation') {
      let t = 0;
      // Perform the intensive calculation
      for (let i = 0; i < 1e8; i++) {
        t += i;
      }
      // Post the result back to the main thread
      self.postMessage(t);
    }
  };