import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",o=document.querySelector(".feedback-form"),r=o.querySelector("input"),l=o.querySelector("textarea");function s(){const e=l.value.trim(),t=r.value.trim(),a=JSON.stringify({text:e,name:t});localStorage.setItem(n,a)}function m(){const e=localStorage.getItem(n);if(e){const{text:t,name:a}=JSON.parse(e);l.value=t||"",r.value=a||""}}m();o.addEventListener("input",s);function c(e){e.preventDefault();const t=r.value.trim(),a=l.value.trim();t&&a?(console.log({email:t,message:a}),localStorage.removeItem(n),o.reset()):console.log("Please fill in all fields.")}o.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
