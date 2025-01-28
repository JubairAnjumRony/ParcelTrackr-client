# Parcel Management System

An advanced and dynamic Parcel Management System built using the MERN stack. This platform enables seamless parcel bookings, efficient parcel assignment, and real-time parcel delivery tracking.

## Live Site URL
[Parcel Management System](https://parceltrackr-24489.web.app/)

## Admin Credentials
- **Username:** admin5@gmail.com
- **Password:** admin5#Ache

---

## Key Features

1. **User Authentication**:
   - Secure login and registration system with Firebase Authentication.
   - Role-based access control (Admin, Delivery Personnel, User).

2. **Parcel Booking**:
   - Users can book parcels with detailed information like weight, delivery address, and receiver details.
   - Real-time pricing calculation based on parcel weight and type.

3. **Admin Dashboard**:
   - Assign parcels to delivery personnel with one click.
   - Monitor parcel statuses (Pending, On the Way, Delivered) in real-time.

4. **Delivery Management**:
   - Delivery personnel can view assigned parcels and update statuses.
   - Integrated live map to locate delivery addresses.

5. **Search and Filter**:
   - Search parcels by delivery address, status, or receiver name.
   - Pagination for managing large datasets efficiently.

6. **Payment Integration**:
   - Integrated payment system using Stripe for secure transactions.

7. **Data Visualization**:
   - Admin dashboard includes ApexCharts for parcel statistics and performance metrics.

8. **Real-time Updates**:
   - Implemented with React Query (TanStack Query) for live data fetching and state management.

9. **Responsive Design**:
   - Mobile-first design using TailwindCSS and optimized for all screen sizes.

10. **User-Friendly Notifications**:
    - Integrated SweetAlert2 and React Toastify for intuitive alerts and notifications.

---

## Tech Stack

- **Frontend**: React, React Router, Axios, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Payment Integration**: Stripe
- **Authentication**: Firebase
- **Data Management**: React Query (TanStack Query)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/parcel-management-system.git
Navigate to the project directory:
bash
Copy
Edit
cd parcel-management-system
Install dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm run dev
Dependencies
json
Copy
Edit
"dependencies": {
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "apexcharts": "^4.3.0",
  "axios": "^1.7.9",
  "firebase": "^11.2.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "moment": "^2.30.1",
  "react": "^18.3.1",
  "react-apexcharts": "^1.7.0",
  "react-confetti": "^6.2.2",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-moment": "^1.1.3",
  "react-router-dom": "^7.1.2",
  "react-toastify": "^11.0.3",
  "react-use": "^17.6.0",
  "sort-by": "^0.0.2",
  "sweetalert2": "^11.15.10"
}
Future Improvements
Add real-time chat between users and delivery personnel.
Implement AI-driven parcel route optimization.
Introduce parcel insurance and advanced tracking features.
Feel free to contribute by creating pull requests or reporting issues. Happy coding!