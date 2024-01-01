// class DomViewTracker {
//   constructor(center = false) {
//     this.rootMargin = center ? "0px 0px -50% 0px" : "0px";
//     console.log("rootMargin set to:", this.rootMargin);
//     this.observer = new IntersectionObserver((entries) =>
//       entries.forEach(
//         (entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//           } else {
//             entry.target.classList.remove("in-view");
//           }
//         },
//         {
//           root: null,
//           rootMargin: this.rootMargin,
//           threshold: 1,
//         }
//       )
//     );
//   }

//   observe(element) {
//     element.forEach((item) => this.observer.observe(item));
//   }

//   unobserve(element) {
//     element.forEach((item) => this.observer.unobserve(item));
//   }

//   disconnect() {
//     this.observer.disconnect();
//   }
// }

class DomViewTracker {
  constructor(triggerCenter = false) {
    // this.rootMargin = triggerCenter ? "0px 0px -45% 0px" : "0px";
    this.observer = new IntersectionObserver(
      (entires) => {
        entires.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        root: null,
        rootMargin: triggerCenter ? "0px 0px -45% 0px" : "0px",
        threshold: 1,
      }
    );
  }

  observe(element) {
    element.forEach((item) => this.observer.observe(item));
  }
}
