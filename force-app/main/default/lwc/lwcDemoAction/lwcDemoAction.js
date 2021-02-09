import { wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import LwcAction from "c/lwcAction";

export default class LWCDemoAction extends LwcAction {
  @wire(getRecord, {
    recordId: '$recordId',
    layoutTypes: "Full"
  })
  wireRecord(value) {
      this.record = value;
      if (value.data) {
          this.ready();
      }
  }
}
