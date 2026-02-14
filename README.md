# Time Tracking Dashboard ⏳

A responsive dashboard component built with **Vanilla JavaScript**. This project focuses on asynchronous data fetching, dynamic DOM manipulation and semantic CSS Grid layouts without relying on external frameworks.

## 🚀 Overview

The goal was to create a dashboard that visualizes time tracking data, allowing users to seamlessly switch between daily, weekly, and monthly views. The application fetches data from a local JSON file and updates the interface in real-time, prioritizing accessibility and robust error handling.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/time-tracking-dashboard-main/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/time-tracking-dashboard-main)

## 💡 Key Features

- **📊 Dynamic Data Rendering:** content updates instantly based on the selected timeframe.
- **rw️ Asynchronous Loading:** Data is fetched from a local JSON file upon initialization.
- **📱 Responsive Grid Layout:** Utilizes CSS Grid to adapt from a single-column mobile view to a multi-column desktop layout.
- **♿ Accessibility:** Includes proper ARIA states (`aria-pressed`) and semantic HTML structure.
- **🛡️ Error Handling:** Prevents runtime errors if data fails to load or DOM elements are missing.

## 🛠️ Technical Implementation

### 1. Asynchronous Data Fetching

To simulate a real-world application, data is not hardcoded into the HTML but loaded externally.

- **Solution:** The **`fetch()` API** is utilized within an **`async/await`** function structure. A **`try...catch` block** manages potential network errors, ensuring the application remains stable even if the `data.json` file fails to load.

### 2. Dynamic DOM Manipulation

Updating multiple cards simultaneously requires an efficient way to map data to the user interface.

- **Solution:** A centralized **`updateCards` function** accepts the selected timeframe as an argument. It iterates through the **JSON object** and maps the values to the corresponding HTML elements using **`querySelectorAll`** and **template literals**, ensuring the DOM is updated cleanly without page reloads.

### 3. State & Accessibility Management

Interactive elements must communicate their state not just visually, but also to assistive technologies.

- **Solution:** Event listeners manage the **active class** for visual styling. Simultaneously, **`aria-pressed` attributes** are programmatically toggled to `"true"` or `"false"`, providing semantic context to screen readers about which timeframe is currently selected.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Grid, Flexbox & Custom Properties)**
- **Vanilla JavaScript (ES6+, Fetch API)**
- **Responsive Design Principles**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
