document.querySelector('#menuBarIcon').addEventListener('click', function() {
    var navAnchors = document.querySelector('.container1');
    var windowWidth = window.innerWidth;
    //  Toggle naviagation depend on how it will hided according to the screen size
    if(windowWidth>610){
        // Toggle navigation visibility when the menu icon is clicked

            navAnchors.style.setProperty('margin', '0px', 'important');
            navAnchors.style.setProperty('display', 'flex', 'important');

    }
    else{
        navAnchors.style.setProperty('margin', '0px', 'important');
        navAnchors.style.setProperty('display', 'flex', 'important');
    }   
});

document.getElementById('menuIconToggle').addEventListener('click', function() {
    var navAnchors = document.querySelector('.container1');
    // Hide navigation when the back button is clicked
    var windowWidth = window.innerWidth;
    if(windowWidth>610){
        navAnchors.style.setProperty('margin-left', '-1000px', 'important');
        navAnchors.style.setProperty('margin-right', '1000px', 'important');
    }
    else{
        
        navAnchors.style.setProperty('display', 'none', 'important');
    }
});
document.querySelector('#myBusines').addEventListener('click', function() {
            this.classList.toggle('active');
})
document.querySelector('#finance').addEventListener('click', function() {
    this.classList.toggle('active');
})
document.querySelector('#orgData').addEventListener('click', function() {
    this.classList.toggle('active');
})


document.querySelectorAll('.navItem').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all tab items
        document.querySelectorAll('.navItem').forEach(tab => {
            tab.classList.remove('active');
        });

        // Add active class to the clicked tab
        this.classList.add('active');

        // Hide all tab contents
        document.querySelectorAll('.myTasks').forEach(content => {
            content.style.display = 'none';
        });

        // Show the corresponding tab content
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'flex';
    });
});

// Initially show the first tab content
document.getElementById('myTaskData').style.display = 'flex';
