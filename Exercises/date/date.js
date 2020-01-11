//1. Make a function which will return passed date object to passed format. Supported formats:

function formatDate(date, format) {
  if (format === 'dd/mm/yyyy') {
    return `${date.getDate()}/${date.getMonth()}${1}/${date.getFullYear()}`;
  } else if (format === 'mm/dd/yyyy') {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  } else if (format === 'yyyy/mm/dd') {
    return `${date.getFullYear()}/${date.getMonth()}${1}/${date.getDate()}`;
  } else if (format === 'dd-mm-yyyy') {
    return `${date.getDate()}-${date.getMonth()}${1}-${date.getFullYear()}`;
  } else if (format === 'mm-dd-yyyy') {
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  } else if (format === 'yyyy-mm-dd') {
    return `${date.getFullYear()}-${date.getMonth()}${1}-${date.getDate()}`;
  }
  return 'Enter valid format';
}


//1.  Make a function which will translate passed date object to passed timezone.

function zoneTransfer(date, timezone) {
  return date.toLocaleString('en-US', { timeZone: timezone });
}

//timezone can be found here https://en.wikipedia.org/wiki/List_of_tz_database_time_zones  ('Europe/Kiev' for Ukraine)
