# Triosight

> AI-Driven Cardiac Surgery Decision Support Platform

Triosight is an intelligent platform designed to empower heart surgery teams with data-driven insights for optimal treatment decisions. By analyzing comprehensive patient data and comparing multiple treatment strategies, Triosight helps medical professionals make informed decisions that can improve patient outcomes.

## Features

### 📊 Dashboard with Patient Overview
- Comprehensive list of patients with key metrics at a glance
- Quick access to patient profiles and treatment plans
- Real-time status indicators for active cases

### 🏥 Patient Card with TrioScore Analysis
- Detailed patient profiles with complete medical history
- TrioScore evaluation across multiple risk factors
- Visual representation of health metrics and risk assessment

### 🔄 Treatment Strategy Comparison
- Side-by-side comparison of three treatment strategies:
  - CABG (Coronary Artery Bypass Grafting)
  - PCI (Percutaneous Coronary Intervention)
  - Medical Management
- Risk scores and confidence levels for each approach
- Evidence-based recommendations

### 📈 Detailed Medical Metrics Breakdown
- Mortality risk assessment
- Surgery risk evaluation
- Complication probability analysis
- Recovery time projections
- Hospital stay duration estimates

### 📉 Statistics and Analytics
- Aggregate data visualization
- Treatment outcome trends
- Performance metrics across patient cohorts

### 💰 Saving Plans Management
- Cost-benefit analysis of treatment options
- Resource allocation optimization
- Budget planning tools

### ⚙️ Settings and User Profile
- Customizable dashboard preferences
- User management and role-based access
- System configuration options

## Technology Stack

### Core Technologies
- **React 18.3.1** - Modern UI library with concurrent features
- **TypeScript 5.5.3** - Type-safe development experience
- **Vite 5.4.2** - Next-generation frontend build tool
- **React Router 6.22.3** - Client-side routing and navigation

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Cross-browser CSS compatibility

### UI Components
- **Lucide React 0.344.0** - Beautiful, consistent icon library

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules

## Getting Started

### Prerequisites
- **Node.js** 16.0 or higher
- **npm** 7.0 or higher (or equivalent package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/menditoledano/triosight.git
cd triosight
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and style:

```bash
npm run lint
```

## Project Structure

```
triosight/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Layout.tsx        # Main application layout
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   ├── TopBar.tsx        # Header and user controls
│   │   ├── PatientProfile.tsx
│   │   ├── HealthMetrics.tsx
│   │   ├── DetailedMetrics.tsx
│   │   ├── StrategyComparison.tsx
│   │   ├── PatientsList.tsx
│   │   ├── MainContent.tsx
│   │   └── tabs/             # Tab components
│   │       ├── Overview.tsx
│   │       ├── Metrics.tsx
│   │       ├── Reports.tsx
│   │       └── Settings.tsx
│   ├── pages/                # Top-level page components
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   ├── PatientCard.tsx   # Individual patient view
│   │   ├── Statistics.tsx    # Analytics page
│   │   ├── SavingPlans.tsx   # Financial planning
│   │   └── Settings.tsx      # Application settings
│   ├── App.tsx               # Root application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── public/                   # Static assets
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies and scripts
```

### Key Directories

- **`/src/components`** - Reusable UI components that can be used across multiple pages
- **`/src/pages`** - Top-level route components corresponding to different views in the application
- **`/src/components/tabs`** - Specialized tab components for the patient card interface

## Design System

### Color Palette

Triosight uses a carefully selected color scheme that balances professionalism with accessibility:

#### Mint (Primary/Accent)
- `mint-50: #e6faf9` - Light backgrounds and hover states
- `mint-500: #00c7be` - Primary actions and highlights
- `mint-600: #00b3ab` - Active states and emphasis

#### Navy (Dark/Professional)
- `navy-900: #1B1E3D` - Headers, text, and professional accents

#### Gray Scale (Neutrals)
- `gray-50: #F9FAFB` - Lightest backgrounds
- `gray-100: #F3F4F6` - Card backgrounds
- `gray-200: #E5E7EB` - Borders and dividers
- `gray-300: #D1D5DB` - Disabled states
- `gray-400: #9CA3AF` - Placeholder text
- `gray-500: #6B7280` - Secondary text
- `gray-600: #4B5563` - Primary text
- `gray-700: #374151` - Emphasis text

### Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured interface with sidebar navigation
- **Tablet** - Adapted layouts for medium screens
- **Mobile** - Touch-optimized mobile experience (planned)

## TrioScore System

### Overview

TrioScore is the core analytical engine of the platform, providing comprehensive risk assessment for cardiac surgery patients. The system evaluates multiple factors to generate actionable insights for treatment planning.

### Evaluated Metrics

1. **Mortality Risk** - Statistical probability of mortality based on patient profile
2. **Surgery Risk** - Procedural risk assessment for surgical interventions
3. **Complication Probability** - Likelihood of post-operative complications
4. **Recovery Time** - Expected recovery duration for each treatment approach
5. **Hospital Stay Duration** - Projected length of hospitalization

### How It Helps Medical Decision-Making

- **Data-Driven Insights** - Removes guesswork by providing statistical analysis
- **Strategy Comparison** - Clear side-by-side evaluation of treatment options
- **Risk Stratification** - Identifies high-risk patients requiring special attention
- **Resource Planning** - Helps allocate medical resources efficiently
- **Evidence-Based** - Recommendations grounded in clinical data and research

### Strategy Evaluation

Each treatment strategy (CABG, PCI, Medical Management) receives:
- **Overall Score** - Composite risk/benefit assessment (0-100)
- **Confidence Level** - Statistical confidence in the recommendation
- **Key Metrics** - Detailed breakdown of relevant factors
- **Risk Indicators** - Visual representation of associated risks

## Current Status & Future Development

### Project Status

Triosight is currently a **front-end prototype** demonstrating the user interface and user experience design for the platform. The application showcases the intended workflow and visual design but uses mock data for demonstration purposes.

### Planned Features

#### Backend Integration
- [ ] RESTful API integration for real patient data
- [ ] Database connectivity for persistent storage
- [ ] Real-time data synchronization
- [ ] Server-side analytics processing

#### Data Visualization
- [ ] Interactive charts with Chart.js or D3.js
- [ ] Real-time data updates and streaming
- [ ] Export capabilities (PDF reports, data exports)
- [ ] Customizable dashboard widgets

#### Authentication & Security
- [ ] User authentication system (JWT-based)
- [ ] Role-based access control (RBAC)
- [ ] HIPAA-compliant data handling
- [ ] Audit logging and compliance tracking

#### Advanced Features
- [ ] Machine learning model integration
- [ ] Predictive analytics for outcome forecasting
- [ ] Natural language processing for clinical notes
- [ ] Integration with EHR systems (HL7/FHIR)

#### Mobile Experience
- [ ] Progressive Web App (PWA) support
- [ ] Native mobile applications (iOS/Android)
- [ ] Offline mode capabilities
- [ ] Push notifications for critical alerts

#### Collaboration Tools
- [ ] Multi-user case discussion
- [ ] Annotation and commenting system
- [ ] Team decision tracking
- [ ] Clinical decision audit trails

## Contributing

This is a private project. For questions or collaboration inquiries, please contact the development team.

## License

Copyright © 2024 Triosight. All rights reserved.

---

**Built with ❤️ for better cardiac care outcomes**
