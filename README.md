# 🏥 Doc-Consult App

A responsive web application built with **React 19**, **React Router**, **Tailwind CSS**, and **Vite** to streamline doctor appointment scheduling. Users can explore doctor profiles, book appointments, manage their bookings, and gain insights via interactive charts.

---

## 🌐 Live Demo

Check out the live version of the app here:  
[Live Demo on Netlify](https://doc-consult.netlify.app/)

---

## ✨ Features

### 📌 Universal Layout

- **Navbar**: Persistent across all pages (even error routes), with logo, navigation links, and an action button — designed as per Figma guidelines.
- **Footer**: Visible on all pages _except_ error pages. Includes navigation links, a centered logo, and social icons linking to the developer's profiles.

### 🏠 Homepage

- **Hero Section**: Eye-catching gradient background with headlines and visuals.
- **Doctors Preview**: Displays 6 doctor cards in a grid layout, with details like specialty, education, and a “View Details” button.
- **Load More**: “Show All” button loads the full list of doctors.
- **Stats Section**: Animated success metrics using `react-countup`, highlighting milestones.

### 👨‍⚕️ Doctor Details

- **Profile Overview**: A detailed card showing doctor's name, photo, background, and availability.
- **Booking Panel**: Real-time availability with a “Book Now” button.
  - Prevents double booking.
  - Shows toast notifications on booking or errors.
  - Redirects to Booking page on success.

### 📅 Booking Management

- **Booking List**: Displays all user appointments with cancellation support.
- **Persistent State**: Appointments are saved using `localStorage` and persist across reloads.
- **Empty State**: Encourages users to book if no appointments exist.

### 📊 Recharts Visualization

- Interactive chart visualizing total booked fees using `recharts`.
- Auto-updates on booking or cancellation.
- Hidden when there’s no data to show.

### 📝 Blogs Section

Educational answers to key React questions:

1. How `useState` works
2. Purpose of `useEffect`
3. Role of custom hooks
4. Controlled vs uncontrolled components
5. Explanation of `useFormStatus()`

### ❌ Error Handling

- Clean, user-friendly 404 page with a redirect to the homepage.
- Footer hidden on error routes, while navbar remains.

---

## ⚙️ Under the Hood

- 🔁 **Routing** with `react-router-dom`
- 🎨 **Styling** via Tailwind CSS
- 📊 **Data Viz** with `recharts`
- 💾 **State Persistence** using `localStorage`
- ⚡ **Fast Dev Experience** via Vite
- 📈 **Animations** with `react-countup`

---

## 🚦 User Experience Enhancements

- **Loading Animation** shown during route transitions
- **Dynamic Titles** update based on current page (e.g., Doctor Name or "Bookings")
- **Fallback Loaders** appear while fetching or reloading data
- **Robust Reloading**: App remains stable on manual refreshes or deep links

---
