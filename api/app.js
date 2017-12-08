require('dotenv').config()

const express = require('express')
const app = express()
const { listFaqs, listCourses, getCourse } = require('./dal')
const port = process.env.PORT || 5000
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const { filter, compose, split, pathOr } = require('ramda')
const sgMail = require('@sendgrid/mail')
// const checkRequiredFields = require('./lib/check-required-fields')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}
sgMail.send(msg)

app.use(bodyParser.json())

app.get('/', (req, res, next) =>
  res
    .status(200)
    .send({ message: 'Welcome to the golf-api. We are glad to have you.' })
)

// LIST ALL FAQs //
app.get('/faq', (req, res, next) => {
  listFaqs({
    include_docs: true,
    inclusive_end: true,
    start_key: 'faq_',
    end_key: 'faq_\ufff0'
  })
    .then(docs => {
      res.status(200).send(docs)
    })
    .catch(err => next(new HTTPError(err.status, err.message)))
})

// LIST ALL COURSES AND FILTER //
app.get('/courses', (req, res, next) => {
  const filter = pathOr(null, ['query', 'filter'], req)
  listCourses(filter)
    .then(docs => res.status(200).send(docs))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

// GET A SPECIFIC COURSE //
app.get('/courses/:id', (req, res, next) => {
  getCourse(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => next(err => new HTTPError(err.status, err.message)))
})

// ERROR HANDLER //
app.use(function(err, req, res, next) {
  console.log(req.method, ' ', req.path, ' ', 'error ', err)
  res.status(err.status || 500).send(err)
})

app.listen(port, () => console.log('golf-api is up on port', port))
