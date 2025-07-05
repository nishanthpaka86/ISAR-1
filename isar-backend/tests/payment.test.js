// tests/payment.test.js
const request = require('supertest');
const app = require('../server');

describe('Payment Routes', () => {
  it('should create a Razorpay order', async () => {
    const res = await request(app)
      .post('/api/payment/create-order')
      .send({
        amount: 500,
        currency: 'INR',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('order');
    expect(res.body.order).toHaveProperty('id');
  });

  // Optional: mock verify signature if your test setup includes signature logic
});
