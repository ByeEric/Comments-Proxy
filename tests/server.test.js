import Axios from 'axios';

// currently not needed
// beforeEach(() => {
// });

// afterEach(() => {
// });

test('can interact with pet purchase service', (done) => {
  Axios.get('http://localhost:4000/buy', {
    headers: {
      "pet_id":"1113"
    }
  }).then(res => {
    expect(res.data.species).toEqual('Jaguar');
    done();
  })
});

test('should respond with a 200 status if pet object is found', (done) => {
  Axios.get('http://localhost:4000/buy', {
    headers: {
      "pet_id":"1113"
    }
  }).then(res => {
    expect(res.status).toEqual(200);
    done();
  })
});

test('should respond with a 404 status if pet object does not exist', (done) => {
  Axios.get('http://localhost:4000/buy', {
    headers: {
      "pet_id":"9999"
    }
  }).then(res => {
    
  }).catch(err => {
    expect(err.response.status).toEqual(404);
    done();
  })
});

test('pet objects should have a, _id, pet_id, class, family, genus, species, price.', (done) => {
  Axios.get('http://localhost:4000/buy', {
    headers: {
      "pet_id":"1113"
    }
  }).then(res => {
    expect(res.data._id).toBeTruthy();
    expect(res.data.pet_id).toBeTruthy();
    expect(res.data.class).toBeTruthy();
    expect(res.data.family).toBeTruthy();
    expect(res.data.genus).toBeTruthy();
    expect(res.data.species).toBeTruthy();
    expect(res.data.price).toBeTruthy();
    done();
  });
})