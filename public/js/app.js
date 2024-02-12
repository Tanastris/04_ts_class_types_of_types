import User from './userClass.js';
console.log('hello from app.ts');
const user1 = {
    id: 1,
    name: 'James',
    lastName: 'Bond',
    isDriver: true,
};
const user2 = new User('James', 'Bond', true);
