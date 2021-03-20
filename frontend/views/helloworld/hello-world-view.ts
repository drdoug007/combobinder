import '!style-loader!css-loader!./hello-world-view.css';
import {showNotification} from '@vaadin/flow-frontend/a-notification';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-combo-box';
import {customElement, html, query} from 'lit-element';
import {View} from '../../views/view';
import {Binder, field} from "Frontend/../target/flow-frontend/form";
import FormDataModel from "Frontend/generated/com/example/application/FormDataModel";
import * as backEnd from "../../generated/BackEnd";
import {ComboBoxElement} from "@vaadin/vaadin-combo-box";

@customElement('hello-world-view')
export class HelloWorldView extends View {
  binder = new  Binder(this, FormDataModel);
  @query("#combo") combo!: ComboBoxElement;

  constructor() {
    super();
  }

  render() {
    const {model} = this.binder;
    return html`
      <vaadin-combo-box id="combo" label="The Value" ...="${field(model.item)}"></vaadin-combo-box>
      <vaadin-button @click="${this.send}">Send</vaadin-button>
    `;
  }

  async firstUpdated() {
      const comboItems = await backEnd.getComboItems();
      this.combo.items = comboItems;
      this.combo.itemValuePath = 'id';
      this.combo.itemLabelPath = 'name';
      this.combo.allowCustomValue=true;
  }

  async send() {
    const value = await this.binder.submitTo(backEnd.doSomethingWithCombo)
    showNotification(`Value is ${value}`);
  }
}
