# TravelTrucks 🚐

TravelTrucks is a camper rental web application that allows users to browse available campers, filter vehicles by their specifications, explore detailed information, and submit booking requests.

The project was developed using Next.js, TypeScript, and TanStack Query.

## Features

- **Home Page** — introductory banner with navigation to the camper catalog.
- **Camper Catalog** — displays available campers with images, prices, ratings, and specifications.
- **Advanced Filtering** — filter campers by location, vehicle type, engine, and transmission.
- **Load More Pagination** — dynamically loads 4 additional campers per request.
- **Camper Details** — individual pages with descriptions, technical specifications, and amenities.
- **Image Gallery** — interactive camper image gallery.
- **Customer Reviews** — user reviews with a five-star rating system.
- **Booking Form** — submit booking requests and receive success notifications.
- **Loading States** — visual feedback during asynchronous requests.
- **Empty State** — informative message when no campers match the selected filters.

## Tech Stack

- Next.js 15 (App Router)
- React
- TypeScript
- TanStack Query
- Axios
- CSS Modules
- React Icons
- Swiper
- Zustand

## Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/catalog` | Camper catalog with filtering and pagination |
| `/catalog/[camperId]` | Camper details, gallery, reviews, and booking form |

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/traveltrucks.git
```

2. Navigate to the project directory:

```bash
cd traveltrucks
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and configure the required environment variables.

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

## API

The application uses the TravelTrucks Campers API to retrieve camper data, apply filters, load additional results, and submit booking requests.

API documentation:

https://campers-api.goit.study/docs

## Deployment

The application is intended to be deployed on Vercel.

**Live Demo:** Add deployment URL here.

