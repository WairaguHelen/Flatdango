// Fetch the first movie's details and display them
function loadFirstFilm() {
  fetch('http://localhost:3000/films/1')
    .then(r => r.json())
    .then(movie => {
      displayMovieDetails(movie);
    });
}

// Fetch and display all movies
function loadAllFilms() {
 fetch('http://localhost:3000/films')
   .then(r => r.json())
   .then(movies => {
     const filmsList = document.getElementById('films');
     filmsList.innerHTML = ''; 
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
  document.getElementById('title').textContent = movie.title;
  document.getElementById('runtime').textContent = `Runtime: ${movie.runtime} min`;
  document.getElementById('showtime').textContent = `Showtime: ${movie.showtime}`;
  
  const ticketsAvailable = movie.capacity - movie.tickets_sold;
  document.getElementById('tickets').textContent = `Tickets Available: ${ticketsAvailable}`;
  
  const purchaseButton = document.getElementById('ticket');
  purchaseButton.disabled = ticketsAvailable === 0;
  purchaseButton.textContent = ticketsAvailable === 0 ? 'Sold Out' : 'Buy Ticket';

  // Bind ticket purchase functionality
  purchaseTicket(movie);
}

// Initialize the app
function init() {
 loadFirstFilm();
 loadAllFilms();
}

document.addEventListener('DOMContentLoaded', init);

// Ticket purchase
function purchaseTicket(movie) {
  const purchaseButton = document.getElementById('ticket');
  
  // Buy Ticket button
  purchaseButton.addEventListener('click', () => {
    const ticketsAvailable = movie.capacity - movie.tickets_sold;
    
    if (ticketsAvailable > 0) {
      // Reduce the tickets sold
      movie.tickets_sold++;
      
      // Update available tickets
      const newticketsAvailable = movie.capacity - movie.tickets_sold;
      document.getElementById('tickets').textContent = `Available Tickets: ${newticketsAvailable}`;
      
      // Sold out tickets
      if (newticketsAvailable === 0) {
        purchaseButton.disabled = true;
        purchaseButton.textContent = 'Sold Out';
      }
    }
  });
}
