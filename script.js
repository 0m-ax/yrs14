$( window ).load(function() {
  $('.sub').click(function() {
    $('.sub').toggle();
  });
  $('.item').click(function() {
    $('.sub').toggle();
  });
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert('you did not alow geolocation this is needed for the site to work');
    }
}

function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
}
function notifyMe(text,title) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert(title+":\n"+text);
  }

  // Let's check if the user is okay to get some notification
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(title, { body:text,icon:'http://14.yrs.maxctech.co.uk/icon.jpg'});
  }

  // Otherwise, we need to ask the user for permission
  // Note, Chrome does not implement the permission static property
  // So we have to check for NOT 'denied' instead of 'default'
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {

      // Whatever the user answers, we make sure we store the information
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }

      // If the user is okay, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(title, { body:text,icon:'http://14.yrs.maxctech.co.uk/icon.jpg'});
      }
    });
  }

  // At last, if the user already denied any notification, and you 
  // want to be respectful there is no need to bother him any more.
}
