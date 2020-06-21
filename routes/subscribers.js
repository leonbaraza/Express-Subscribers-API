const express = require('express');
const router = express.Router();

const Subscriber = require('./../models/Subscriber')


// Getting all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// Getting one subscriber
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
})

// Creating one subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating one subscriber
router.patch('/:id', getSubscriber, async(req, res) => {
    
});

// Deleting one subscriber
router.delete('/:id', getSubscriber, async(req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted Subscriber'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Middleware function to get subcribers

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        console.log(subscriber)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router