// app/javascript/controllers/toggle_controller.ts
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller { // Specify HTMLElement for the controller's element type

  // Define the target element. The '!' asserts it will exist when needed.
  static targets = [ "togglableElement" ]
  declare readonly togglableElementTarget: HTMLElement; // Typed target

  // Define the class value. The '!' asserts it will exist.
  static values = { hiddenClass: String }
  declare readonly hiddenClassValue: string; // Typed value

  // Action method triggered by data-action="click->toggle#toggle"
  toggle(): void {
    // console.log("Toggling visibility...");
    // Use the class defined in data-toggle-hidden-class (defaulting if not found)
    // debugger
    const cssClass = this.hiddenClassValue ? this.hiddenClassValue : 'd-none';
    // debugger
    this.togglableElementTarget.classList.toggle(cssClass);
  }

  // Optional: Log when connected
  connect(): void {
    console.log("Toggle controller connected", this.element);
    // You could potentially check here if the target exists if you didn't use '!'
    // if (!this.hasTogglableElementTarget) { console.error("Missing toggle target!"); }
    // if (!this.hasHiddenClassValue) { console.warn("Missing hiddenClass value, defaulting to 'hidden'"); }
  }
}