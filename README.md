# Dynamic API-SERVER
An Express/Node.js based server designed to be a “model agnostic” REST API server, which can perform CRUD operations on any data model

# API-SERVER
Author: Joshua Beasley

## Project Description
Business Requirements
We’re opening a online store! In order to support our web application, we need to create an API that will serve specific data (namely, categories and products) to our application. We will write an API to interface with our databases to provide category and product information to our front end app.

As it is highly likely that we will need more data types and sources in the future, it’s imperative that we build this API as a standardized means of working with any data model, using any persistence system, though a common interface. The API Server must operate as follows:

Support all REST/HTTP methods
GET: Retrieve record(s) from a data source
All
One (by id)
Some (by filtering)
POST: Create a new record in a data source
PUT: Update a single full record in a data source
PATCH: Update part of a single record in a data source
DELETE: Delete a record in a data source 

## Log of Project Per Day
### Day 1
Today I spun up the json server and started getting familiar with using swagger. 
I got really excited when I first got to use the PUT method to alter an existing data set -- so cool! 
My biggest struggle with today's lab was actually getting swagger to "create an api definition" I tried for 30 min or so but kept getting a status 400 error. Then I got some help from my classmate Joseph and from the TA Cait and we still couldn't figure it out. I ended up just trying things out and found that downgrading to 2.0 from 3.0 allowed it to work... not sure why, but I'll take it!
### day 2
Today I wrote a lot of routes, spent a few hours trying to get the time route to work right, still not what I'd like but I needed to move on.
I read the demos and tried to learn from those. 

## Technical Description
swagger url:
https://app.swaggerhub.com/apis/beasleyDOTcom/ooops/0.1
### How to Start

### How to Run Tests

#### Special Shoutouts
Shout out to Cait, She's always a great help!



