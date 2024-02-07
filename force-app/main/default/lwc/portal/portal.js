import { LightningElement , track} from 'lwc';





export default class Portal extends LightningElement {
    @track selectedTab;

    tabChangeHandler(event){
        this.selectedTab = event.target.value;
        console.log(this.selectedTab)
            }
}