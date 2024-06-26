const displayRangeDate = (start, end) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const startDate = new Intl.DateTimeFormat('en-US', options).format(new Date(start)).replace(',', '');
    const endDate = new Intl.DateTimeFormat('en-US', options).format(new Date(end)).replace(',', '')

    return `${startDate} - ${endDate}`
}

const displayMonthDate = (dateString) => {
    // Create a Date object from the input date string
    const date = new Date(dateString);

    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the month and year
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Return the formatted date
    return `${month} ${year}`;
}

export {
    displayRangeDate,
    displayMonthDate
}

