fetch('data.json')
    .then(response => response.json())
    .then(simData => {
        const packageContainer = document.getElementById('packages');

        simData.forEach(sim => {
            const packageDiv = document.createElement('div');
            packageDiv.className = 'package';

            packageDiv.innerHTML = `
                <img src="${sim.image}" alt="${sim.package}">
                <h2>${sim.package}</h2>
                <p>${sim.offer}</p>
                <p class="price">${sim.price}</p>
                <a href="#" class="order">Order</a>
            `;

            packageContainer.appendChild(packageDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
