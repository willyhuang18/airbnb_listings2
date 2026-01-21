# Airbnb Listings - SF Dynamic Dashboard

This is a responsive web application built with a vanilla frontend stack (HTML5, CSS3, ES6+). It dynamically displays San Francisco rental data via AJAX, featuring a responsive UI and intelligent status indicators.

## 🚀 Live Links
- **GitHub Pages**: [Airbnb - Live Site](https://willyhuang18.github.io/airbnb_listings2/)
- **Code Repository**: [Repo](https://github.com/willyhuang18/airbnb_listings2.git)

## 📝 Core Features
- **Asynchronous Data Fetching**: Uses the `fetch` API with `async/await` to retrieve data from a local `airbnb_sf_listings_500.json` dataset.
- **Smart Data Filtering**: Specifically extracts and renders the first 50 listings as per project requirements.
- **Dynamic DOM Rendering**:
  - Automatically maps listing names, prices, descriptions, and images.
  - Parses and generates Amenities tags dynamically.
  - Loads Host profiles (name and thumbnail) for every card.
  - Integrated Review Counts to display property popularity.

## 🌟 Creative Additions
To enhance user experience and simulate real-world platform logic, I implemented a Dynamic Status System:

### Urgency & Scarcity Indicators
- **Logic**: The system monitors the `availability_30` field in real-time.
- **Function**: If a listing has fewer than 10 days available in the next month, a “⏳ High Demand” badge is automatically triggered.
- **Goal**: Provides immediate visual feedback to help users identify high-demand properties quickly.

### Social Proof Integration
- **Logic**: Extracted the `number_of_reviews` field from the dataset.
- **Function**: Displays the total number of reviews next to the host information.
- **Goal**: Enhances the reliability and transparency of the listing by showcasing historical guest engagement.

## 🛠️ Technical Highlights
- **Layout**: Built with a Bootstrap 5.3 responsive grid system for cross-device compatibility.
- **Data Sanitization**: Developed a regex-based cleaning logic to handle non-standard JSON formats in the amenities field (correcting single-quote issues).
- **Code Quality**:
  - Developed using ES6 Modules.
  - Utilized Template Literals for clean and maintainable UI components.
  - Applied CSS `-webkit-line-clamp` for multi-line text truncation to ensure uniform card heights.

## 📂 Project Structure
```plaintext
.
├── css/
│   └── main.css         # Custom UI styles and layout fixes
├── js/
│   └── main.js          # Core business logic (AJAX & Rendering)
├── index.html           # Main entry point
├── airbnb_sf_listings_500.json  # Dataset
└── README.md            # Documentation
```

## 👤 Author
**Pangta Huang**  
Northeastern University
