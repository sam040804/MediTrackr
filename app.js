// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost/meditrackr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


const userSchema = new mongoose.Schema({
    aadhaar_number: String,
    phone_number: String
});

const User = mongoose.model('User', userSchema);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
    // res.send('Hello World!');
  });

  app.get('/signup', function (req, res) {
    res.sendFile(__dirname + '/app/signup.html');
    // res.send('Hello World!');
  });


  app.post('/signup', async (req, res) => {
    // const { aadhar, phone } = req.body;
    // const newUser = new User({aadhar, phone});
    // try {
    //     const savedUser = await newUser.save();
    //     res.status(201).json(savedUser);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Error saving medicine');
    // }
    // newUser.save((err, savedUser)
    //  newUser.save((err, savedUser) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send('Error saving medicine');
    //     } else {
    //         res.status(201).json(savedUser);
    //     }
    // });

    res.redirect('/personal');
  } )


app.post('/login', async (req, res) => {
    const { aadhaar_number, phone_number } = req.body;
    res.redirect('/personal');


    // User.findOne({ aadhaar_number, phone_number }, (err, user) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send('Internal Server Error');
    //     } else {
    //         if (user) {
    //             res.status(200).send('Login successful!');
    //         } else {
    //             res.status(401).send('Unauthorized');
    //         }
    //     }
    // });
    // console.log(User.find());
    // User.findOne({ aadhaar_number, phone_number }).exec()
    // .then(user => {
    //     if (user) {
    //         res.status(200).send('Login successful!');
    //     } else {
    //         res.status(401).send('Unauthorized');
    //     }
    // })
    // .catch(err => {
    //     console.error(err);
    //     res.status(500).send('Internal Server Error');
    // });
});

app.get('/personal', function(req, res) {
    res.sendFile(__dirname + '/app/personal.html');
});

app.post('/personal', function(req, res) {
    res.redirect('/medicalhistory')
})

app.get('/medicalhistory', function(req, res) {
    res.sendFile(__dirname + '/app/medicalhistory.html');
})

app.post('/medicalhistory', function(req, res) {
    res.redirect('/blooddonor');
})

app.get('/blooddonor', function(req, res) {
    res.sendFile(__dirname + '/app/blooddonor.html');
})

app.post('/blooddonor', function(req, res) {
    res.redirect('/prescription');
})

app.get('/prescription', function(req, res) {
    res.sendFile(__dirname + '/app/prescription.html');
})

app.post('/prescription', function(req, res) {
    res.redirect('/prescriptionsuccess');
})

app.get('/prescriptionsuccess', function(req, res) {
    res.sendFile(__dirname + '/app/prescriptionsucess.html');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
