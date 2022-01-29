function x_goto(e) {
  let href = e.target.getAttribute("href");
  if (href == "/industries") {
    window.location.href = href;
  }
}

// //

// let topper = document.getElementById("topper");
// let pc = topper.querySelector(".xpc");
// let mobile = topper.querySelector(".xmobile");
// let pc_link = pc.querySelector(".sub_list_box").querySelectorAll("a");
// let mobile_link = mobile.querySelector(".sub_list_box").querySelectorAll("a");
// // let all_nav_links = [...mobile_link, ...pc_link];
// mobile_link.forEach((l, i) => {
//   l.addEventListener("click", (e) => {
//     let href = e.target.getAttribute("href");
//     if (href == "/industries") {
//       window.location.href = href;
//     }
//   });
// });
// pc_link.forEach((l, i) => {
//   l.addEventListener("click", (e) => {
//     let href = e.target.getAttribute("href");
//     if (href == "/industries") {
//       window.location.href = href;
//     }
//   });
// });
