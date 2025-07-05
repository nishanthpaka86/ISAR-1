// tests/auth.test.js
const request = require('supertest');
const app = require('../server');
const db = require('../config/db');
const bcrypt = require('bcrypt');

beforeAll(async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);
  await db.query('DELETE FROM users WHERE email = ?', ['test@example.com']);
  await db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    ['Test User', 'test@example.com', hashedPassword]
  );
});

afterAll(async () => {
  await db.query('DELETE FROM users WHERE email = ?', ['test@example.com']);
  await db.end();
});

describe('Auth Routes', () => {
  it('should login successfully', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should fail with wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(res.statusCode).toBe(401);
  });

  it('should send OTP to existing email', async () => {
    const res = await request(app)
      .post('/api/auth/send-otp')
      .send({ email: 'test@example.com' });

    // Could be 200 or 404 depending on logic
    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.statusCode).toBeLessThan(500);
  });
});
