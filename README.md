# Results Summary Component (Vanilla Web)

A clean, responsive results summary component built using vanilla HTML, CSS, and JavaScript.

![Results Summary Component](./images/active-states.jpg)

## Key Features & Benefits

- **Clean and Simple:** Built using only vanilla HTML, CSS, and JavaScript for a lightweight, dependency-free component.
- **Responsive Design:** Mobile-first approach with optimized layouts for both mobile and desktop viewports (desktop styles at `992px`).
- **Dynamic Data Rendering:** Fetches and displays test results from a JSON file, calculating and showing average scores.
- **Polished Visuals:** Thoughtful use of CSS custom properties, gradients, shadows, and layout to create a modern summary display.
- **Accessible & Semantic:** Uses semantic HTML structure to improve accessibility and SEO.
- **Easy to Integrate:** Drop the `index.html`, `style.css`, `app.js`, `data.json`, and the `images/` folder into any project—no build step required.
- **Customizable:** Clear class names and CSS variables make it simple to change colors, typography, spacing, and data.

## Prerequisites & Dependencies

- A web browser (Chrome, Firefox, Safari, Edge) to view the component.
- A text editor or IDE to edit `index.html`, `style.css`, `app.js`, and `data.json` (e.g., VS Code).
- (Optional) A local server for consistent asset loading (VS Code Live Server).

## Installation & Setup Instructions

1. **Clone or download the repository** (or copy the project folder locally):

```bash
git clone https://github.com/yourusername/results-summary-component-vanilla-14.git
```

```bash
cd results-summary-component-vanilla-14
```

2. **Open the project** in your editor and open `index.html` in the browser:

- Double-click `index.html` or open it from your editor.
- Or serve the folder using a simple local server (recommended for consistent image loading)

## Usage Examples

The component displays a summary of test results. To customize, edit `data.json`:

- Update the categories, scores, and icons in the JSON array.

Example: to change a score, edit `data.json`:

```json
[
  {
    "category": "Reaction",
    "score": 85,  // Update this score
    "icon": "./images/icon-reaction.svg",
    "width": 20,
    "height": 20
  },
  // ... other categories
]
```

To customize the appearance, edit `style.css`:

- Change colors by updating CSS custom properties in `:root`.
- Modify the layout in the media queries.

## Configuration Options

Most visual settings live in `style.css` using CSS custom properties at the top of the file (`:root`). Common adjustments:

- **Colors & Palette:** Edit variables such as `--YELLOW`, `--BLUE`, `--GREEN`, `--RED`, `--DARK-NAVY`, etc.
- **Typography:** Change the `--FF` font-family or the `@import` Google Font entry to swap fonts.
- **Layout & Spacing:** Modify `.results-card` properties, padding, and margins to alter layout proportions.
- **Responsive Breakpoint:** Desktop styles apply at `@media (min-width: 992px)` — change that value if needed.

For data configuration, edit `data.json` to update categories, scores, and icons.

## Contributing Guidelines

Contributions are welcome. Suggested flow:

1. Fork the repository.
2. Create a feature branch (e.g., `feature/add-new-category`).
3. Make focused commits and push to your fork.
4. Open a pull request describing your changes.

## License

License not specified.

## Acknowledgments

- Google Fonts for the `Hanken Grotesk` font used in this project.