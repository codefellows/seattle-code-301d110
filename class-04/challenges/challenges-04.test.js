'use strict';

/* ------------------------------------------------------------------------------------------------
These objects and arrays are global and will be used for each assignment. DO NOT ALTER THEM
------------------------------------------------------------------------------------------------ */

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toys: 57,
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

In the addPeople function, use spread and destructuring assignments to:
  - Create a new array called newPeople as a copy of the people array
  - Add a person named 'Odie' added to the beginning of the array
  - Add another one named 'Garfield' added to the end of the array

Prove that the original people array is unchanged

Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it
Create a state object with keys of people and stuff that contain the people and stuff data.
Do this using object destructuring assignment
Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don't just spread in newPeople and newStuff)
Ensure that the original people, stuff, and state are unchanged.

------------------------------------------------------------------------------------------------ */

const addPeople = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

In the setSate function, use spread and destructuring assignments to:
  - Create and return a state object with 2 keys:
    people, which will contain a copy of the people array
    stuff, which will contain a copy of the stuff object

Ensure that the original people array and stuff objects are unchanged

Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don't just spread in newPeople and newStuff)
Prove that the original people, stuff, and state are unchanged.

------------------------------------------------------------------------------------------------ */

const setState = (arr) => {
  // Solution code here...
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

In the newState function, use only spread and destructuring assignments to:
  - Create and return a state object with 2 keys:
    people, which will contain a copy of the people array
    stuff, which will contain a copy of the stuff object
    Add a new car ("Ford") added to the list of cars
    Change the toothbrush from "frayed" to "brand new"
    Add 1 to the number of toys

Ensure that the original people array and stuff objects are unchanged

------------------------------------------------------------------------------------------------ */

const newState = (arr) => {
  // Solution code here...
};


/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-03.test.js
------------------------------------------------------------------------------------------------ */


describe('Testing challenge 1', () => {
  test('It should return a copy of the people array with 2 new values', () => {
    const orig = ['Kookla', 'Fran', 'Ollie'];
    const expected = ['Odie', 'Kookla', 'Fran', 'Ollie', 'Garfield'];
    const copy = addPeople();
    expect(copy).toStrictEqual(expected);
    expect(orig).toStrictEqual(people);
  });
});

describe('Testing challenge 2', () => {
  test('It should return a state object with 2 keys', () => {
    const originalPeople = ['Kookla', 'Fran', 'Ollie'];
    const originalStuff = {
      tv: 'huge',
      radio: 'old',
      toys: 57,
      toothbrush: 'frayed',
      cars: ['Toyota', 'Mazda']
    }
    const expected = {people: originalPeople, stuff: originalStuff};
    const copy = setState();
    expect(copy).toStrictEqual(expected);
    expect(originalPeople).toStrictEqual(people);
    expect(originalStuff).toStrictEqual(stuff);
  });
});

describe('Testing challenge 3', () => {
  test('It should return a state object with 2 keys and new values', () => {
    const originalPeople = ['Kookla', 'Fran', 'Ollie'];
    const originalStuff = {
      tv: 'huge',
      radio: 'old',
      toys: 57,
      toothbrush: 'frayed',
      cars: ['Toyota', 'Mazda']
    }
    const expected = {
      people: ['Kookla', 'Fran', 'Ollie'],
      stuff: {
        tv: 'huge',
        radio: 'old',
        toys: 58,
        toothbrush: 'brand new',
        cars: ['Toyota', 'Mazda', 'Ford']
      }
    }
    const copy = newState();
    expect(copy).toStrictEqual(expected);
    expect(originalPeople).toStrictEqual(people);
    expect(originalStuff).toStrictEqual(stuff);
  });
});
