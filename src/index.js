const express = require('express');
const app = express();

const fakePhones = [ {
    "id": 99,
    "name": "FakePhone",
    "manufacturer": "fake",
    "description": "great fake",
    "color": "black",
    "price": 19999,
    "imageFileName": "Moto_G6.png",
    "screen": "5,7 inch Full-HD",
    "processor": "Snapdragon 450",
    "ram": 3
}];

app.get('/', (req, res) => {
    res.send(fakePhones)
});

app.listen(3001, () => {
    console.log('listening on Port 3001')
})