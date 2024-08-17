const  formatDate=(createdAt)=> {
    // Convert the ISO string to a Date object
    const date = new Date(createdAt);
  
    // Format the date and time in 12-hour format with AM/PM
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour12: true
    });
  }

  export default formatDate