const Subscriber = require('./../models/Subscriber')

const findOneById = async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        console.log(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    // res.json({subscriber})
    res.subscriber = subscriber
    console.log(subscriber)
    next()
}

module.exports = findOneById