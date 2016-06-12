import chai from 'chai'
import chaiHttp from 'chai-http'

global.environment = 'test'
import * as server from '../src/server.js'
import Item from '../src/models/item'
import * as seed from '../src/db/seed'

const should = chai.should()
const app = server.app

chai.use(chaiHttp)

describe('Shopping List', () => {
  before(done => {
    seed.run(() => {
      done()
    })
  })

  after(done => {
    Item.remove(() => {
      done()
    })
  })

  it('should list items on get', (done) => {
    chai.request(app)
      .get('/items')
      .end((err, res) => {
        should.equal(err, null)
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body.should.have.length(3)
        res.body[0].should.be.a('object')
        res.body[0].should.have.property('_id')
        res.body[0].should.have.property('name')
        res.body[0]._id.should.be.a('string')
        res.body[0].name.should.be.a('string')
        res.body[0].name.should.equal('Broad beans')
        res.body[1].name.should.equal('Tomatoes')
        // res.body[2].name.should.equal('Peppers')
        done()
      })
  })

  it('should add an item on post', (done) => {
    chai.request(app)
      .post('/items')
      .send({'name': 'Kale'})
      .end((err, res) => {
        should.equal(err, null)
        res.should.have.status(201)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('_id')
        res.body.should.have.property('name')
        res.body.name.should.be.a('string')
        res.body._id.should.be.a('string')
        res.body.name.should.equal('Kale')
        Item.find({}, (err, items) => {
          items.should.be.a('array')
          items.should.have.length(4)
          items[3].should.be.a('object')
          items[3].should.have.property('id')
          items[3].should.have.property('name')
          items[3].id.should.be.a('string')
          items[3].name.should.be.a('string')
          items[3].name.should.equal('Kale')
        })
        Item.findOne({name: 'Kale'}, (err, item) => {
          item.name.should.equal('Kale')
        })
        done()
      })
  })

  it('should not add an item without a body', (done) => {
    chai.request(app)
      .post('/items')
      .send({})
      .end((err, res) => {
        err.should.not.be.null
        res.should.have.status(400)
        done()
      })
  })

})
