function showDate() {
    today = new Date();

    year = today.getYear()+1900;
    month = today.getMonth()+1;
    day = today.getDay()+24;

    document.write(year+"年"+month+"月"+day+"日");
}
