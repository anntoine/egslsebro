function Ackermann(e,n){return 0===e?n+1:e>0&&0===n?Ackermann(e-1,n):e>0&&n>0?Ackermann(e-1,Ackermann(e,n-1)):0}self.addEventListener("message",function(e){var n=(new Date).getTime();Ackermann(e.data.complexity,e.data.complexity),self.postMessage({time:(new Date).getTime()-n})},!1);