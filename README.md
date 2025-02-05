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

## 🛠️ Technology Stack  

| Category           | Technologies Used |
|-------------------|------------------|
| **Frontend**     | React, React Router, Axios, TailwindCSS |
| **Backend**      | Node.js, Express.js, MongoDB |
| **Authentication** | Firebase Authentication |
| **Payments**     | Stripe |
| **State Management** | React Query (TanStack Query) |
| **Data Visualization** | ApexCharts |

---
## 📜 Dependencies  
```json
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
```

---

## 🛠 Installation & Setup  

### **Prerequisites**  
- Node.js (>= 18)  
- MongoDB Database  
- Firebase Authentication  
- Stripe Account  

### **Steps**  

#### 1️⃣ Clone the repository  
```sh
git clone https://github.com/your-repo/parcel-management-system.git
cd parcel-management-system
```

#### 2️⃣ Install dependencies  
```sh
npm install
```

#### 3️⃣ Set up environment variables (see `.env.example` below)  

#### 4️⃣ Start the development server  
```sh
npm run dev
```

---

## ⚙️ Configuration (`.env`)  
Create a `.env` file in the root directory and configure the following:

```env
# Firebase Authentication
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_url

# Stripe API Keys
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Server Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

🚨 **Important:** Never expose your `.env` file in public repositories. Add it to `.gitignore` to keep it secure.

---

## 🚀 Future Improvements  

🔹 **Real-time Chat** – Enable chat between users and delivery personnel.  
🔹 **AI-Driven Route Optimization** – Optimize parcel delivery routes with AI.  
🔹 **Parcel Insurance** – Introduce insurance options for parcel security.  
🔹 **Advanced Tracking** – Improve live tracking accuracy and analytics.  


---

## 🤝 Contributing  
Feel free to contribute by creating pull requests or reporting issues. Happy coding! 🚀  

---
## Live Site URL
[Parcel Management System](https://parceltrackr-24489.web.app/)
---
🚀 **Enjoy seamless parcel booking and tracking with Parcel Management System!** 📦📍
