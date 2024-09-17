const  formatDate=(createdAt)=> {
    // Convert the ISO string to a Date object
    const date = new Date(createdAt);
  
    // Format the date and time in 12-hour format with AM/PM
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour12: true
    });
  }

  export default formatDate

  export function DateFormat  (isoDate) {
    if (!isoDate) return '';
    return new Date(isoDate).toISOString().split('T')[0]; // Get 'YYYY-MM-DD'
  };