const displayRangeDate = (start, end) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const startDate = new Intl.DateTimeFormat('en-US', options).format(new Date(start)).replace(',', '');
    const endDate = new Intl.DateTimeFormat('en-US', options).format(new Date(end)).replace(',', '')

    return `${startDate} - ${endDate}`
}

export {
    displayRangeDate
}