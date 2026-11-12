# DORMER — Smart Home Automation Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/dormer-smart-home-dashboard/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable front-end reconstruction of the uploaded 21-second screen recording.

## Video observations

The screen recording shows a smart-home dashboard branded **DORMER** with a TypeScript / Vite / GSAP development label. Main screens and interactions visible in the recording:

- Home overview with an isometric house floor plan, room labels, garden trees and rooftop solar panels.
- Scene presets including Away, Morning, Relax, Movie and Night.
- Climate summary with indoor/outdoor temperatures and hourly weather.
- Kitchen & Dining device controls, including lighting, AC and appliance toggles.
- Climate page with a vertical thermostat, target temperature and room-by-room climate bars.
- Light/dark theme transition.

The tiny source panels show references to GSAP delayed calls, a warming liquid gradient, and `document.startViewTransition` for theme changes. The visible JavaScript fragments are too small to recover a complete original repository reliably.

## Implemented functionality

- Interactive sidebar navigation: Overview, Rooms, Climate, Energy and Security.
- SVG isometric floor plan with clickable room hotspots.
- Scene presets update their active state and relevant light toggles.
- Room device switches with feedback.
- Climate target temperature controls (+ / −) and thermometer fill.
- Room temperature summaries.
- Energy overview with inline SVG chart.
- Light/dark theme toggle.
- Device search by name.
- Responsive desktop, tablet and mobile layouts.
- Accessible buttons, keyboard room selection and reduced-motion CSS.

## Run locally

No npm install or build step is required.

```bash
python -m http.server 8000
```

Open: http://localhost:8000

## Project structure

```text
dormer-smart-home-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- Inline SVG for the isometric floor plan and energy chart

## Source accuracy

This is a functional reconstruction of the visible interface and interactions. It is not a verbatim extraction of the original TypeScript/Vite/GSAP project because the code panels in the video are too small to read completely.
