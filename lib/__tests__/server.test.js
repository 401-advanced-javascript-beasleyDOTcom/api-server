'use strict'
const { server } = require('../server.js');
const route = ('../routes.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web api server', () =>{
    it('should respond with a 500 error', () => {
        return mockRequest
        .get('/bad')
        .then(results =>{
            expect(results.status).toBe(500);
        }).catch(console.error)
    
    })
})