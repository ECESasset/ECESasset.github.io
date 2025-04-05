document.addEventListener('DOMContentLoaded', function() {
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            const futureEventsContainer = document.getElementById('event-cards-container');
            const pastEventsContainer = document.getElementById('past-events-container');
            
            data.future_events.forEach(event => {
                const eventCard = createEventCard(event);
                futureEventsContainer.appendChild(eventCard);
            });

            data.past_events.forEach(event => {
                const eventCard = createEventCard(event);
                pastEventsContainer.appendChild(eventCard);
            });
        });
});

function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.title;
    
    const content = document.createElement('div');
    content.classList.add('card-content');
    
    const title = document.createElement('h3');
    title.textContent = event.title;
    
    const description = document.createElement('p');
    description.textContent = event.description;

    const date = document.createElement('p');
    date.innerHTML = `<strong>Date:</strong> ${event.date}`;
    
    const venue = document.createElement('p');
    venue.innerHTML = `<strong>Venue:</strong> ${event.venue}`;
    
    const button = document.createElement('a');
    button.href = event.link;
    button.classList.add('btn');
    button.textContent = 'Register Now';
    
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(date);
    content.appendChild(venue);
    content.appendChild(button);
    
    card.appendChild(img);
    card.appendChild(content);
    
    return card;
}
