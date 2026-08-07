# MarketPlace - Product Multi-Filter Sidebar

A modern e-commerce product browsing interface with real-time filtering, sorting, and a beautiful dark theme UI.

![MarketPlace Screenshot](https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=400&fit=crop)

## ✨ Features

- **🎨 Dark Theme UI** - Glassmorphism sidebar with gradient cards and smooth animations
- **⚡ Instant Filtering** - Real-time updates on every filter change (no submit button needed)
- **🔍 Multi-Filter System**
  - Category checkboxes (Electronics, Apparel, Footwear)
  - Dual-handle price range slider
  - Minimum star rating selector
- **📊 Smart Sorting** - Price (Low to High) and Top Rated First
- **💳 Indian Pricing** - All prices displayed in ₹ (INR)
- **🖼️ Real Product Images** - Curated Unsplash photos matched to each product
- **📱 Responsive Design** - Works seamlessly on all screen sizes
- **🧪 Fully Tested** - 31 passing tests (unit, integration, property-based)

## 🚀 Live Demo

[View Live Demo](https://vibe-coding.vercel.app)

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library + fast-check (property-based testing)
- **Styling**: Custom CSS with glassmorphism and gradients
- **State Management**: React hooks (useState)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sania-patil/vibe-coding.git

# Navigate to the app directory
cd vibe-coding/app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🧪 Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## 📁 Project Structure

```
app/
├── src/
│   ├── components/          # React components
│   │   ├── CategoryChecklist.tsx
│   │   ├── EmptyState.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── PriceRangeSlider.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── RatingSelector.tsx
│   │   └── SortDropdown.tsx
│   ├── data/                # Product data and types
│   │   └── products.ts
│   ├── lib/                 # Core logic
│   │   └── filterEngine.ts
│   ├── App.tsx              # Main app component
│   └── App.css              # Global styles
├── package.json
└── vite.config.ts
```

## 🎯 Key Components

### Filter Engine
Pure function that applies combinatorial AND filtering:
- Filter by category (OR within selected categories)
- Filter by price range (inclusive)
- Filter by minimum rating
- Sort results (price ascending or rating descending)

### Product Data
30 products across 3 categories with:
- Real product-matched images from Unsplash
- Prices in Indian Rupees (₹999 - ₹24,999)
- Star ratings (3.5 - 4.9)

## 🧩 Features in Detail

### Instant State Feedback
Every filter adjustment triggers an immediate re-render with updated results. When no products match the filters, an empty state is shown with a "Reset filters" button.

### Glassmorphism UI
Modern frosted-glass effect on the sidebar with:
- Backdrop blur effects
- Subtle borders and shadows
- Gradient overlays

### Category Badges
Color-coded badges on product cards:
- 🟣 Purple for Electronics
- 🩷 Pink for Apparel
- 🟢 Green for Footwear

## 📊 Testing Strategy

- **Unit Tests**: Individual component behavior
- **Integration Tests**: Full app workflow (filtering, sorting, reset)
- **Property-Based Tests**: 7 correctness properties with 100+ random test cases each using fast-check

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👤 Author

**Sania Patil**
- GitHub: [@sania-patil](https://github.com/sania-patil)

---

Built with ❤️ using React + Vite + TypeScript
