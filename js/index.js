document.querySelectorAll('#amountButtons .btn').forEach(button => {
    button.addEventListener('click', () => {
        const amount = button.getAttribute('data-amount');
        document.getElementById('customAmount').value = amount;
        
        // Remove 'selected' class from all buttons
        document.querySelectorAll('#amountButtons .btn').forEach(btn => btn.classList.remove('selected'));
        
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
    });
});

document.getElementById('customButton').addEventListener('click', () => {
    document.getElementById('customAmount').focus();
});

// Help Section poor
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.stat-item h3');
    counters.forEach(counter => {
        const countTo = +counter.getAttribute('data-count');
        let count = 0;
        const speed = 2000; // duration in milliseconds

        const updateCount = () => {
            const increment = Math.ceil(countTo / (speed / 100));
            count += increment;
            if (count < countTo) {
                counter.textContent = count;
                setTimeout(updateCount, 100);
            } else {
                counter.textContent = countTo;
            }
        };

        updateCount();
    });
});