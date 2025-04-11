// app/javascript/controllers/hello_controller.ts
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hello"
export default class extends Controller {
  // Define a typed property (optional, but demonstrates TS)
  // element!: HTMLElement; // Use '!' for definite assignment assertion if sure it's present on connect

  // Standard Stimulus connect method
  connect(): void {
    // console.log("Hello from Stimulus via TypeScript!");
    this.greet("TypeScript");
  }

  // Example method with type annotation
  greet(name: string): void {
    this.element.innerHTML = `<h1>Hello, ${name}!</h1>`;
    // console.log(`Greeting ${name}`);
  }

  // Example of accessing a typed target (if you define targets)
  // static targets = [ "name" ]
  // declare readonly nameTarget: HTMLInputElement
  //
  // displayName(): void {
  //   console.log(this.nameTarget.value);
  // }
}