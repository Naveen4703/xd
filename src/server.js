const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const connection = require('./db/connect.js');
const publicRouter = require('./routers/router.js');
const adminRouter = require('./routers/adminRouter.js');
const vhost = require('vhost');
const path = require('path');

const app = express();
const adminApp = express();

// Set up middleware for main domain
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(vhost('xdtrinetra.me', express.static(publicDirectoryPath)));

// Set up middleware for admin subdomain
const adminDirectoryPath = path.join(__dirname, '../admin');
adminApp.use(express.static(adminDirectoryPath));
app.use(vhost('admin.xdtrinetra.me', adminApp));

// Set up App other middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/api', publicRouter);

// Set up Aadmin other middleware
adminApp.use(express.json());
adminApp.use(cors());
adminApp.use(helmet());
adminApp.use('/admin/api', adminRouter);

app.get("/",(req,res) => {
    res.status(200).json({Response: "Helmoo !"});
})

adminApp.get("/",(req,res) => {
    res.status(200).json({Response: "Helmoo from admin!"});
})


// Start server only when database is connected
connection().then(() => {
  try {
    app.listen(process.env.PORT || 8000, () => {
      console.log('Server started on port ' + (process.env.PORT || 8000));
    });
  } catch (err) {
    console.log('Unable to start server due to:', err);
  }
});
