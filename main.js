let numbers = [3, 25, 209];

function convert(numbers){
    let array = numbers.toString();
    array = array.replace(/1/g, 'One');
    array = array.replace(/2/g, 'Two');
    array = array.replace(/3/g, 'Three');
    array = array.replace(/4/g, 'Four');
    array = array.replace(/5/g, 'Five');
    array = array.replace(/6/g, 'Six');
    array = array.replace(/7/g, 'Seven');
    array = array.replace(/8/g, 'Eight');
    array = array.replace(/9/g, 'Nine');
    array = array.replace(/0/g, 'Zero');
    console.log(array);
}

return convert(numbers);

