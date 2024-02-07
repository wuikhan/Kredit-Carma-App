import { LightningElement, track } from "lwc";

export default class HelloWorldNew extends LightningElement {
  /* data binding example */
  fullName = "codegator";
  title = "Developer";

  updateValue(event) {
    this.title = event.target.value;
  }

  /* @track binding example */
  @track address = {
    city: "Woodbridge",
    zipcode: 22193,
    country: "USA"
  };

  trackHandler(event) {
    this.address.city = event.target.value;
  }

  // using spread operator
  person = {
    name: "john",
    age: 22193,
    gender: "male"
  };

  updatename(event) {
    this.person = { ...this.person, name: event.target.value };
  }

  /* getter example */
  users = ["john", "smith", "chris"];
  num1 = 10;
  num2 = 20;

  get firstUser() {
    return this.users[0].toUpperCase();
  }

  get multiply() {
    return this.num1 * this.num2;
  }

  areDetailsVisible = false;

  handleChange(event) {
    this.areDetailsVisible = event.target.checked;
  }
}