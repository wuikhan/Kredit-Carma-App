import { LightningElement } from "lwc";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

export default class ContactCreator extends LightningElement {
  contactObject = CONTACT_OBJECT;
  myFields = [FIRSTNAME_FIELD, LASTNAME_FIELD,PHONE_FIELD];

  handleContactCreated() {}
}