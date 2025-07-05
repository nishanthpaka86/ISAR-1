// File: tests/enroll.test.js
const request = require('supertest');
const app = require('../server');
const db = require('../config/db');
const bcrypt = require('bcrypt');

let userId;
const testEmail = `test${Date.now()}@example.com`; // ✅ Unique email for each test
const password = 'password123';

beforeAll(async () => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    // Create user
    const [result] = await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      ['Test User', testEmail, hashedPassword]
    );
    userId = result.insertId;
  } catch (err) {
    console.error('❌ Error inserting test user:', err);
    throw err;
  }
});

afterAll(async () => {
  // Clean up user and enrollments
  await db.query('DELETE FROM enrollments WHERE user_id = ?', [userId]);
  await db.query('DELETE FROM users WHERE id = ?', [userId]);
  await db.end();
});

describe('Course Enrollment', () => {
  it('should enroll in a course', async () => {
    const res = await request(app)
      .post('/api/auth/enroll')
      .send({
        userId,
        courseName: 'Drone Basics',
        price: 999,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'Course enrolled successfully');
  });
});
