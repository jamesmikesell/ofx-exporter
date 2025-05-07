
// --- Example Usage (optional, for testing) ---

// To use this in your project, you would typically instantiate it and call show/hide:
// const spinner = new LoadingSpinner();

// To show the spinner:
// spinner.show();

// To hide the spinner (e.g., after an async operation completes):
// setTimeout(() => {
//     spinner.hide();
// }, 3000); // Hide after 3 seconds for demonstration


// --- How to compile and use ---
// 1. Save this code as `loadingSpinner.ts`
// 2. Compile it to JavaScript using the TypeScript compiler: `tsc loadingSpinner.ts`
//    This will produce `loadingSpinner.js`.
// 3. Include `loadingSpinner.js` in your HTML file:
//    `<script src="loadingSpinner.js"></script>`
// 4. In another script tag or JS file, you can then use it:
//    `const mySpinner = new LoadingSpinner();`
//    `mySpinner.show();`
//    // ... later ...
//    `mySpinner.hide();`

export class LoadingSpinner {
  private overlayElement: HTMLDivElement | null = null;
  private spinnerElement: HTMLDivElement | null = null;

  /**
   * Creates and displays the loading spinner overlay.
   * The spinner will cover the entire page and block interactions.
   */
  public async show(): Promise<void> {
    // Prevent creating multiple overlays if show() is called again
    if (this.overlayElement) {
      return;
    }

    // 1. Create the overlay element
    this.overlayElement = document.createElement('div');
    this.overlayElement.style.position = 'fixed';
    this.overlayElement.style.top = '0';
    this.overlayElement.style.left = '0';
    this.overlayElement.style.width = '100%';
    this.overlayElement.style.height = '100%';
    this.overlayElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
    this.overlayElement.style.zIndex = '9999'; // Ensure it's on top of everything
    this.overlayElement.style.display = 'flex';
    this.overlayElement.style.justifyContent = 'center';
    this.overlayElement.style.alignItems = 'center';

    // 2. Create the spinner element
    this.spinnerElement = document.createElement('div');
    this.spinnerElement.style.border = '8px solid #f3f3f3'; // Light grey
    this.spinnerElement.style.borderTop = '8px solid #3498db'; // Blue
    this.spinnerElement.style.borderRadius = '50%';
    this.spinnerElement.style.width = '60px';
    this.spinnerElement.style.height = '60px';
    this.spinnerElement.style.animation = 'spin 1s linear infinite';

    // 3. Add keyframes for the spinning animation
    // We need to add this to the document's head to make it work
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
    document.head.appendChild(styleSheet);

    // 4. Append spinner to overlay, and overlay to body
    this.overlayElement.appendChild(this.spinnerElement);
    document.body.appendChild(this.overlayElement);
    document.body.style.overflow = 'hidden'; // Prevent scrolling while spinner is active

    // Use a timeout to ensure the spinner is visible as javascript execution is non-blocking
    // and the spinner might not be visible immediately after appending it to the DOM.
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  /**
   * Hides and removes the loading spinner overlay from the page.
   */
  public async hide(): Promise<void> {
    if (this.overlayElement) {
      document.body.removeChild(this.overlayElement);
      this.overlayElement = null;
      this.spinnerElement = null; // The spinner is a child, so it's removed with the overlay
      document.body.style.overflow = ''; // Restore scrolling

      // Use a timeout to ensure the spinner is visible as javascript execution is non-blocking
      // and the spinner might not be visible immediately after appending it to the DOM.
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}
