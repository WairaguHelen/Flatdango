// Fetch the first movie's details and display them
function loadFirstMovie() {
  fetch('http://localhost:3000/films/1')
    .then(r => r.json())
    .then(movie => {
      displayMovieDetails(movie);
    });
}

// Fetch and display all movies in the menu
function loadAllMovies() {
 fetch('http://localhost:3000/films')
   .then(r => r.json())
   .then(movies => {
     const filmsList = document.getElementById('films');
     filmsList.innerHTML = ''; // Clear placeholder
     movies.forEach(movie => {
       const li = document.createElement('li');
       li.textContent = movie.title;
       li.classList.add('film', 'item');
       filmsList.appendChild(li);
     });
   });
}

// Display movie details in the movie details section
function displayMovieDetails(movie) {
  document.getElementById('movie-poster').src = movie.poster;
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-runtime').textContent = `Runtime: ${movie.runtime} min`;
  document.getElementById('movie-showtime').textContent = `Showtime: ${movie.showtime}`;
  
  const availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById('movie-tickets').textContent = `Available Tickets: ${availableTickets}`;
  
  const buyButton = document.getElementById('buy-ticket');
  buyButton.disabled = availableTickets === 0;
  buyButton.textContent = availableTickets === 0 ? 'Sold Out' : 'Buy Ticket';

  // Bind ticket purchase functionality
  handleBuyTicket(movie);
}

// Initialize the app
function init() {
 loadFirstMovie();
 loadAllMovies();
}

document.addEventListener('DOMContentLoaded', init);

// Handle ticket purchase
function handleBuyTicket(movie) {
  const buyButton = document.getElementById('buy-ticket');
  
  // Event listener for the Buy Ticket button
  buyButton.addEventListener('click', () => {
    const availableTickets = movie.capacity - movie.tickets_sold;
    
    if (availableTickets > 0) {
      // Reduce the number of tickets sold
      movie.tickets_sold++;
      
      // Update available tickets on the frontend
      const newAvailableTickets = movie.capacity - movie.tickets_sold;
      document.getElementById('movie-tickets').textContent = `Available Tickets: ${newAvailableTickets}`;
      
      // Disable button and update text if sold out
      if (newAvailableTickets === 0) {
        buyButton.disabled = true;
        buyButton.textContent = 'Sold Out';
      }
    }
  });
}
