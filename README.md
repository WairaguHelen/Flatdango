# Flatdango
An application for the Flatiron Movie Theater, allowing users to explore movies, view their details, and purchase tickets. The app dynamically fetches movie data from a local JSON server and provides an interactive experience for users to navigate and manage ticket bookings.

# Features:
# Core Features
1. View details of the first movie when the page loads, including:
- Poster
- Title
- Runtime
- Showtime
- Available tickets
- Movie description
2. Browse all available movies in a menu on the left sidebar.
3. Purchase movie tickets:
- Decrease the number of available tickets when a user buys one.
- Prevent ticket purchase if the movie is sold out.

# Bonus Feature
Indicate sold-out movies:
- Show "Sold Out" in the button text for unavailable movies.
- Style sold-out movies in the sidebar with a sold-out class.

# Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: JSON Server for mock API
- Version Control: Git and GitHub

# Setup Instructions
1. Clone the Repository
Clone this repository to your local machine:
git clone <repository_url>

2. Install JSON Server
Navigate to the project directory and install json-server globally or locally:
npm install -g json-server

3. Start the JSON Server
Run the following command to start the JSON Server:
json-server --watch db.json
The server will be available at: http://localhost:3000/films

4. Open the Application
Open the index.html file in a browser to view the application:
explorer.exe index.html
Or double-click the index.html file in your project directory.

# How to Use the Application
# Initial View:
When the page loads, the first movie's details will be displayed.
A menu of all movies will be visible in the left sidebar.

# Buy Tickets:
Click the "Buy Ticket" button to reduce the available ticket count by one.
If no tickets are left, the button text changes to "Sold Out," and further purchases are disabled.

# Sold-Out Movies:
Sold-out movies are visually styled in the sidebar.

# File Structure
Flatdango/
├── index.html        # Main HTML file for the application
├── style.css         # CSS file for styling
├── app.js            # JavaScript file for functionality
├── db.json           # JSON file for mock API data
├── README.md         # Project documentation

# API Endpoints
# Get All Movies
GET /films

# Example Response:
[
  {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 27,
    "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  ...
]

# Get a Specific Movie
GET /films/:id

# Example Response:
{
  "id": "1",
  "title": "The Giant Gila Monster",
  "runtime": "108",
  "capacity": 30,
  "showtime": "04:00PM",
  "tickets_sold": 27,
  "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
  "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
}

# Contributing
1. Fork the repository.

2. Create a new branch:
git checkout -b feature-branch-name

3. Commit your changes:
git commit -m "Add feature description"

4. Push to the branch:
git push origin feature-branch-name

5. Open a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Author
Helen Wairagu
