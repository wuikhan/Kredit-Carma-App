import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  userNames = ["john", "smith", "nick", "mike"];
  fetchDetails() {
    const ele = this.template.querySelector("h1");
    ele.style.border = "1px solid red";
    console.log(ele.innerText);

    const nameElement = this.template.querySelectorAll(".myname");
    Array.from(nameElement).forEach((item) => {
      console.log(item.innerText);
      item.setAttribute("title", item.innerText);
    });

    // lwc:dom="manual"
    const childEle = this.template.querySelector(".child");
    childEle.innerHTML = "<p> I am an innethtml</p>";
  }
}