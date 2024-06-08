# Code4Community Technical Challenge - Partner Organizations Dashboard

The Code4Community Partner Organizations Dashboard is an 
interactive web application designed to simplify 
the management of partner organizations' information.
This dashboard allows users to view, add, and delete 
partner organizations. The dashboard ensures that partner information 
is stored centrally, enabling all users to access up-to-date information.

## Features 
### View Partner Organizations 
- Display a comprehensive list of partner organizations. 
- Show essential information for each organization, including:
  - Organization’s Name 
  - Organization’s Logo (via URL)
  - Description: Details about what the organization does and how we support them. 
  - Active Status: Indication of whether we are currently working with the organization.

### Delete Partner Organization
- Easy deletion of partner organization entries.
- Immediate reflection of changes across all user sessions.

### <u>Bonus Features</u>
### Edit Existing Partner Organization
- Ability to edit existing partner organization details.
- Modify any of the previously mentioned fields.

### Search and Filter
- Ability to search by Partner Organization Names and 
filter by active status

### Data Persistence
- Utilized a NoSQL Database MongoDB to ensure data persists when 
user restarts the application 

## Technologies Used
- **Frontend**: React, React Bootstrap for UI components
- **Backend**: Spring Boot + Maven for RESTful APIs
- **Database**: MongoDB for storing partner information

## Design Decisions
**React Frontend with React Bootstrap**:
React provides component-based approach
to building user interfaces, which enhances code 
organization and reusability. 
React Bootstrap offers pre-designed 
UI components that allowed for rapid development 
and consistent styling.

**Spring Boot Backend with MongoDB**:
Spring Boot offers a streamlined framework for building 
RESTful APIs, reducing boilerplate code, allowed for the fast
development of backend APIs.
MongoDB, a NoSQL database, being one of the most popular databases with Spring Boot,
provides flexibility and scalability 
for storing partner organization data.

## Reflection
During this project, I gained valuable insights and skills 
that have enhanced my understanding of 
both frontend and backend development. 
One significant learning point was 
the styling of frontend components, 
particularly with React Bootstrap, 
which allowed me to understand the underlying 
components in Bootstrap. 
Additionally, I learned how to utilize Spring Boot's 
`ResponseEntity` class, which provides 
a more structured approach to handling 
HTTP responses compared to using `void` methods.

Throughout the project, I've run into issues with the backend endpoints
such as when the request is made, nothing happens, or an error is 
being thrown in the console. I was able to resolve the problem by 
ensuring the endpoint was working properly using Postman. Then 
looking at the error/exception that's being thrown in the console, 
and finally looking at the headers and the payload when making the requests. 
In which, I figured out that the payload wasn't correct when making
the POST request.

I've also successfully implemented bonus features such as
the ability to edit existing organizations, a database to 
store partner organization information, and the ability 
the search by name and filter by active status. I chose 
these features to implement because I believe these features 
are important to have for a "dashboard" to be useful.

---

# Prerequisites To Run The Application
- Have Node.js + NPM installed
- Preferably IntelliJ as IDE to run Spring Boot backend 
- Java JDK 17

## **Frontend**
### cd into FrontEndC4C file:
- Run the following commands: 
  - `npm install` 
  - `npm install react-bootstrap bootstrap`
  - `npm install react-icons`
  - `npm install axios`
  

- **Run `npm run dev` to start the frontend locally**

## **Backend**
- Spring Boot + Maven 
- **Start the backend by running the C4cApplication.java file**
