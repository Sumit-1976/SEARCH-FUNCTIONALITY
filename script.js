document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');

    // Fetch data from CSV file
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const items = rows.map(row => row.split(',')[0]); // Assuming the first column contains the items

            // Populate the list
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                itemList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const items = itemList.getElementsByTagName('li');

        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].innerText.toLowerCase();
            if (itemText.includes(searchTerm)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    });
});
