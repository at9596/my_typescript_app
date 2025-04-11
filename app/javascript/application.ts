// app/javascript/application.ts

// Import Stimulus
import { Application } from "@hotwired/stimulus"
// Import controllers
import HelloController from "./controllers/hello_controller"
import ToggleController from "./controllers/toggle_controller"

// Import Turbo (if you use it)
import "@hotwired/turbo-rails"


// console.log("Application.ts loaded");

// Initialize Stimulus
declare global {
  interface Window { Stimulus: Application; } // Add type definition for window.Stimulus
}

const application = Application.start()
window.Stimulus = application // Attach to window for easy debugging

// Register your controllers here
application.register("hello", HelloController)
application.register("toggle", ToggleController)




// Configure Stimulus development experience
application.debug = false // Set to true for more logs

export { application } // Optional: export if you need to import it elsewhere