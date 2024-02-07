import { LightningElement } from "lwc";

export default class HelloWorld extends LightningElement {
  fname = "";
  lname = "";
  areDetailsVisible = false;

  handleChange(event) {
    const field = event.target.name;
    if (field === "fname") {
      this.fname = event.target.value;
    } else if (field === "lname") {
      this.lname = event.target.value;
    }
  }

  get changetoUppercase() {
    return `${this.fname} ${this.lname}`.toUpperCase();
  }

  showText(event) {
    this.areDetailsVisible = event.target.checked;
  }

  employees = [
    { id: 1, name: "John", title: "VP" },
    { id: 2, name: "Mike", title: "CEO" },
    { id: 3, name: "Steve", title: "COO" }
  ];
}