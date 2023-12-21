function showDate() {
    today = new Date();

    year = today.getYear()+1900;
    month = today.getMonth();
    day = today.getDay();

    document.write(year+"年"+month+"月"+day+"日");
}
