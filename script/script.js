 // Toggle navigation visibility when the menu icon is clicked
document.querySelector('#menuBarIcon').addEventListener('click', function() {
    var navAnchors = document.querySelector('.container1');
    var windowWidth = window.innerWidth;
    // Hiding type based on window width to reduce effects on other containers 
    if(windowWidth>610){
            navAnchors.style.setProperty('margin', '0px', 'important');
            navAnchors.style.setProperty('display', 'flex', 'important');
    }
    else{
        navAnchors.style.setProperty('margin', '0px', 'important');
        navAnchors.style.setProperty('display', 'flex', 'important');
    }   
});

// Hide navigation when the back button is clicked
document.getElementById('menuIconToggle').addEventListener('click', function() {
    var navAnchors = document.querySelector('.container1');
    // Hiding type based on window width to reduce effects on other containers 
    var windowWidth = window.innerWidth;

    if(windowWidth>610){
        navAnchors.style.setProperty('margin-left', '-1000px', 'important');
        navAnchors.style.setProperty('margin-right', '1000px', 'important');
    }
    else{      
        navAnchors.style.setProperty('display', 'none', 'important');
    }
});

// when side bar menu item class active, it shows sub menu
 document.querySelectorAll('.menuItem').forEach((item, index) => {
    
    var icon = item.querySelector('.menuItem .arrowDown');
    // if item have sub menu icon, (then only we need to do all other)
    if(icon){
        item.addEventListener('click', function() {        
            if(this.classList.contains('active')){
                // resetting all values to default if the item already active
                this.classList.remove('active')
                this.style.setProperty('background-color', '');
                icon.style.setProperty('transform', 'rotate(0deg)');
            }
            else{
                // removing the special styles of all other active items
                document.querySelectorAll('.menuItem').forEach(tab => {
                    tab.classList.remove('active');            
                 });
                document.querySelectorAll('.menuItem .arrowDown').forEach(icon =>{
                    icon.style.setProperty('transform', 'rotate(0deg)');      
                })
                // adding to active class
                this.classList.add('active');
                this.style.setProperty('background-color', '#1A213F');
                icon.style.setProperty('transform', 'rotate(180deg)');
            }          
        })
    }
})

//when transaction item active it shows the transaction description
document.querySelectorAll('.transactionDetails').forEach((item, index) => {

    var paymentData = document.querySelectorAll('.paymentData');
    var icons = document.querySelectorAll('.paymentData img');
    //iterationally adding events to each transaction
    item.addEventListener('click', function() {
        if(this.classList.contains('active')){
            this.classList.remove('active')
            paymentData[index].style.setProperty('background-color', '#ffffff');
            icons[index].style.setProperty('transform', 'rotate(180deg)');
        }
        // if not already active
        else{
            let i = 0
            //removing all other active transaction properties
            document.querySelectorAll('.transactionDetails').forEach(trans => {
                trans.classList.remove('active');
                paymentData[i].style.setProperty('background-color', '#ffffff');
                icons[i].style.setProperty('transform', 'rotate(180deg)');
                i+=1;
                console.log(paymentData)
             });
             // adding to active class
            this.classList.add('active');
            icons[index].style.setProperty('transform', 'rotate(0deg)');
            paymentData[index].style.setProperty('background-color', '#F8F9FC');
        }
        
    })
})

// shows content on tasks container based on the nav selected
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
