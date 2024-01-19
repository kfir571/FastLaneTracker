function getFormattedDate() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    var date = new Date();
    var dayName = days[date.getDay()];
    var monthName = months[date.getMonth()];
    var day = date.getDate();
  
    return dayName + ' ' + monthName + ' ' + day;
  }

  function getHourAndMinutes(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = (now.getMinutes() - now.getMinutes() % 5).toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    return time;
  }

  function getDate(){
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month since it's zero-based
    const year = now.getFullYear().toString();
    const formattedDate = `${day}_${month}_${year}`;
    return formattedDate;
  }

  export {getFormattedDate, getHourAndMinutes, getDate};