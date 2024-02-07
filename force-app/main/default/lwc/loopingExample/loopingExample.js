import { LightningElement } from "lwc";

export default class LoopingExample extends LightningElement {
  carsList = ["Ford", "Audi", "Toyota", "Honda"];

  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "Sundar Pichai"
    },
    {
      id: 2,
      company: "Apple",
      name: "Tim Cook"
    },
    {
      id: 3,
      company: "Fb",
      name: "Mark Zuck"
    },
    {
      id: 4,
      company: "Amazon",
      name: "Jeff Bezos"
    }
  ];
}