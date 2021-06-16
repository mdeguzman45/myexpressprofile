/**
 * filename: app.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: May 29, 2021
 */

// IIFE -- Immediately Invoked Function Expression

(function() {
    function start()
    {
        console.log("App started...");

        // find all buttons that have impacting transactions like delete
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm('Are you sure?')) {
                    event.preventDefault();
                    window.location.assign('/business-contact-list');
                }
            });
        }
    }

    window.addEventListener("load", start);

})();