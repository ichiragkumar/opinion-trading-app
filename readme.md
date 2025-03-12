---

# **Assignment: Backend Development for Opinion Trading App**

## **Objective**  
The purpose of this assignment is to evaluate your backend development skills, including API creation, WebSocket implementation, and database management using MongoDB. The goal is to build a functional backend system that can:  
- Fetch live data  
- Process events  
- Enable trading operations via an admin panel  

👉 If you want to understand more about opinion trading, please visit: **[probo.in](https://probo.in)**  

---

## **Requirements**

### **1. Tech Stack**

- **Programming Language:** Node.js (Express.js or Nest.js preferred)
- **Database:** MongoDB
- **WebSockets:** Socket.io or equivalent WebSocket library
- **API Consumption:** Fetch live scores, available events, odds, etc., from external APIs
- **Authentication:** JWT-based authentication

---

### **2. Core Features to Implement**

#### **A. API Integration & Data Fetching**

✅ Fetch live sports scores, available events, odds, and other relevant details from third-party APIs (use mock APIs if live ones are unavailable).  
✅ Store the fetched data in MongoDB for real-time processing.

---

#### **B. WebSocket Integration**

✅ Implement WebSocket connections to push live updates to the frontend/admin panel.  
✅ Ensure that the events and trades are updated in real-time.

---

#### **C. Admin Panel API**

✅ Create a secure admin API that allows:

- Viewing fetched events and trade details
- Creating new events and setting up trading options
- Managing user trades and results

✅ Implement authentication and role-based access control.

---

#### **D. Trade Execution & Settlement**

✅ Allow users to place trades on live events via API.  
✅ Store trades and maintain their statuses.  
✅ Settle trades based on event outcomes and update user balances.

---

#### **E. Database Management**

✅ Design MongoDB schemas for:

- Users
- Events
- Trades
- Odds & Market Data

✅ Ensure proper indexing and optimization for high-speed querying.

---

#### **F. Logging & Error Handling**

✅ Implement proper error handling and logging mechanisms.  
✅ Use tools like **Winston** or similar for logging events and errors.

---

## **Deliverables**

📌 **Source Code:**

- Hosted on a public/private GitHub repository

📌 **README File:**

- Instructions on setting up and running the project
- API documentation (Postman collection is a plus)

📌 **Short Write-Up:**

- Explain the architecture and data flow
- Describe challenges faced and solutions implemented

📌 **Deployed Version:**  
(Optional but preferred) – Use services like **Vercel**, **Heroku**, or **AWS**

---

## **Evaluation Criteria**

✅ Code quality and structure  
✅ API efficiency and security  
✅ WebSocket implementation correctness  
✅ Database design and optimization  
✅ Handling of real-time updates  
✅ Documentation clarity

---

## **Bonus Points**

⭐ Implement a basic frontend (React.js or Next.js) to visualize data  
⭐ Implement unit testing with **Jest** or **Mocha**  
⭐ CI/CD pipeline setup

---

## **Submission Deadline**

⏳ **Within 3 Days** of receiving this mail/message

---
