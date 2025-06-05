(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/calculation.worker.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
// calculation.worker.js
self.onmessage = function(e) {
    if (e.data === 'startCalculation') {
        let t = 0;
        // Perform the intensive calculation
        for(let i = 0; i < 1e8; i++){
            t += i;
        }
        // Post the result back to the main thread
        self.postMessage(t);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_calculation_worker_bda09318.js.map