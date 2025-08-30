
MediTrackr: is a web-based personal health management system. It allows users to register, enter personal and medical details, manage prescriptions, and search for blood donors.

---

 **Features**

* User **Sign Up / Login**
* Enter **Personal Details**
* Record **Medical History**
* Add **Prescriptions**
* **Scan Options**: QR, Iris, Fingerprint
* **Blood Donor Search** by blood group and location
* Simple **backend simulation** using Node.js and PHP
* Frontend built with **HTML, CSS, JS**

---

## **Project Structure**

```
MediTrackr/
│── app.js                # Node.js backend
│── backend.php           # PHP backend simulation
│── blooddonors.html      # Blood donor search page
│── index.html            # Homepage
│── medicalhistory.html   # Medical history input
│── personal.html         # Personal details page
│── prescription.html     # Doctor's prescription page
│── prescriptionsuccess.html # Confirmation page after prescription
│── scan.html             # QR/Iris/Fingerprint scanning
│── searchdonors.php      # Blood donor search PHP API
│── signup.html           # User registration
│── style.css             # Shared CSS
```

---

 **Setup Instructions**

**Prerequisites**

* **Node.js** and **npm**
* **PHP** (optional for donor search simulation)
* A modern browser

---

**1. Install Node dependencies**


npm install express body-parser


---

 **2. Run the Node.js server**

node app.js

* Server runs at: [http://localhost:3000](http://localhost:3000)

---

 **3. Open the app**

* Navigate to `index.html` in your browser (or via the server if using Express static files)

---

 **4. Optional: Run PHP backend**

* If you want to simulate blood donor API:

php -S localhost:8000


* Access donor search at [http://localhost:8000/searchdonors.php](http://localhost:8000/searchdonors.php)

---

 **Usage**

1. **Sign Up** → Enter Name, Email, Password → Next → Personal Details
2. **Medical History** → Fill past medications, allergies, present medications
3. **Prescription** → Enter medicine details and doctor info → Success page
4. **Blood Donor Search** → Select blood group and location → List of donors

---

 **Database Simulation**

* Currently uses **in-memory arrays** in `app.js` for donors.
* User registration and medical details are **not persisted**.
* Can be extended to **MongoDB** or **MySQL** for full backend functionality.

---

 **Dependencies**

* Node.js
* Body-parser
* PHP (for donor search simulation)

---

 **Screenshots**

https://drive.google.com/drive/folders/1dpjCdIx-LI8M78pNTLCnFM1J-2YYbY9r?usp=drive_link

---


