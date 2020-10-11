const displayNum = (value) => {
    let display = '';
    let noDisplay = '';
    let number = '';
    let dec = '';

    if(value.includes('.')) {
        number = value.substring(0, value.indexOf('.'));
        dec = value.substring(value.indexOf('.'));

    } else {
        number = value;
    }
    
    value = parseFloat(number).toLocaleString() + dec;

    /*if(value.length >= 16) {
        display = value.substring(0, 16);
        noDisplay = value.substring(16);

        return display;
    } else {
        return value;
    }*/

    return value;

};

export default displayNum;