function age() {
    // The let keyword was introduced in ES6 (2015).
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;
    let date = new Date();
    let d2 = date.getDate(); //Current Date
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //For Jan. to Dec.
    if (d1 > d2) { //loop(if user value is greater then current day.
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) { //loop(if user value is greater then current month).
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    // The var keyword is used in all JavaScript code from 1995 to 2015.
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    // Output
    document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days',
        alert('Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days');
}  