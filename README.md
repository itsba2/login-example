## What is this?
This is a register-login-logout mechanism example for a NodeJS-React app.

## What techs are used?
- NodeJS
  - express
  - express-session
  - mongoose
  - connect-mongo
  - bcrypt
- React
  - tailwindcss
  - material ui
- MongoDB
  
## How to use
1. `npm install` in both **/login_backend** and **/login_frontend**
2. Configure **.env** files:
  - in **/login_backend/.env** include:
    - `PORT=yourPortNumber`
    - `MONGO_URL=yourMongoUrl`
    - `SECRET=yourSessionSecret`
    - `NODE_ENV=local`
  - in **/login_frontend/.env** include:
    - `REACT_APP_BASE_URL=yourBackendUrl`
3. Run backend: `cd login_backend; npm start`
  - **NOTE**: Make sure that local MongoDB server is running or you provided a MongoDB Atlas Database URL as environment variable.
4. Run frontend: `cd login_frontend; npm start`

