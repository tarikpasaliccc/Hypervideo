//JSON shenanigans
let text = '{"Object":[' +
    '{"Name":"Bett", "Description":"Das ist ein Bett!", "Start":"0", "End":"25" },' +
    '{"Stage":1, "Start":"0", "End":"5", "X":"20", "Y":"5", "Width":"35", "Height":"60" },' +
    '{"Stage":2, "Start":"6", "End":"10", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":3, "Start":"11", "End":"19", "X":"15", "Y":"25", "Width":"25", "Height":"15" },' +
    '{"Stage":4, "Start":"20", "End":"25", "X":"35", "Y":"25", "Width":"25", "Height":"15" }]}';

let text2 = '{"Object":[' +
    '{"Name":"Schrank", "Description":"Das ist ein Schrank!", "Start":"10", "End":"25" },' +
    '{"Stage":1, "Start":"0", "End":"5", "X":"10", "Y":"10", "Width":"10", "Height":"10" },' +
    '{"Stage":2, "Start":"6", "End":"10", "X":"30", "Y":"30", "Width":"5", "Height":"40" },' +
    '{"Stage":3, "Start":"11", "End":"19", "X":"15", "Y":"25", "Width":"25", "Height":"15" },' +
    '{"Stage":4, "Start":"20", "End":"25", "X":"35", "Y":"25", "Width":"25", "Height":"15" }]}';

let text3 = '{"Object":[' +
    '{"Name":"Stuhl", "Description":"Das ist ein Stuhl!", "Start":"20", "End":"200" },' +
    '{"Stage":1, "Start":"50", "End":"100", "X":"20", "Y":"5", "Width":"35", "Height":"60" },' +
    '{"Stage":2, "Start":"6", "End":"10", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":3, "Start":"11", "End":"19", "X":"15", "Y":"25", "Width":"25", "Height":"15" },' +
    '{"Stage":4, "Start":"20", "End":"25", "X":"35", "Y":"25", "Width":"25", "Height":"15" }]}';


let text7 = '{"Object":[' +
    '{"Name":"Couch", "Description":"Das ist ein Coach!", "Start":"128", "End":"149" },' +
    '{"Stage":1, "Start":"128", "End":"147", "X":"12", "Y":"15", "Width":"35", "Height":"30" }]}';

let text8 = '{"Object":[' +
    '{"Name":"Schrank", "Description":"Das ist ein Schrank!", "Start":"150", "End":"157" },' +
    '{"Stage":1, "Start":"150", "End":"151", "X":"35", "Y":"10", "Width":"20", "Height":"40" },' +
    '{"Stage":2, "Start":"152", "End":"153", "X":"31", "Y":"15", "Width":"20", "Height":"35" },' +
    '{"Stage":3, "Start":"154", "End":"155", "X":"29", "Y":"20", "Width":"20", "Height":"25" },' +
    '{"Stage":4, "Start":"156", "End":"157", "X":"30", "Y":"22", "Width":"20", "Height":"20" }]}';


let text9 = '{"Object":[' +
    '{"Name":"Lampe", "Description":"Das ist eine Lampe!", "Start":"158", "End":"165" },' +
    '{"Stage":1, "Start":"158", "End":"159", "X":"40", "Y":"10", "Width":"20", "Height":"25" },' +
    '{"Stage":2, "Start":"160", "End":"161", "X":"40", "Y":"11", "Width":"20", "Height":"25" },' +
    '{"Stage":2, "Start":"162", "End":"163", "X":"40", "Y":"13", "Width":"20", "Height":"25" },' +
    '{"Stage":3, "Start":"164", "End":"165", "X":"40", "Y":"15", "Width":"20", "Height":"25" }]}';

let text10 = '{"Object":[' +
    '{"Name":"Bett", "Description":"Das ist ein Bett!", "Start":"166", "End":"183" },' +
    '{"Stage":1, "Start":"166", "End":"170", "X":"20", "Y":"15", "Width":"35", "Height":"33" },' +
    '{"Stage":2, "Start":"171", "End":"174", "X":"20", "Y":"15", "Width":"35", "Height":"33" },' +
    '{"Stage":3, "Start":"175", "End":"184", "X":"20", "Y":"15", "Width":"38", "Height":"33" }]}';

let text11 = '{"Object":[' +
    '{"Name":"Nachtkasten", "Description":"Das ist ein Nachtkasten!", "Start":"166", "End":"183" },' +
    '{"Stage":1, "Start":"166", "End":"170", "X":"7", "Y":"20", "Width":"10", "Height":"25" },' +
    '{"Stage":2, "Start":"171", "End":"175", "X":"5", "Y":"20", "Width":"10", "Height":"25" },' +
    '{"Stage":3, "Start":"176", "End":"178", "X":"5", "Y":"20", "Width":"10", "Height":"25" },' +
    '{"Stage":4, "Start":"179", "End":"183", "X":"7", "Y":"20", "Width":"10", "Height":"25" }]}';

let text12 = '{"Object":[' +
    '{"Name":"Nachtkästchen", "Description":"Das ist ein Nachtkästchen!", "Start":"185", "End":"190" },' +
    '{"Stage":1, "Start":"185", "End":"186", "X":"40", "Y":"15", "Width":"15", "Height":"25" },' +
    '{"Stage":2, "Start":"187", "End":"188", "X":"44", "Y":"15", "Width":"15", "Height":"30" },' +
    '{"Stage":3, "Start":"189", "End":"190", "X":"48", "Y":"15", "Width":"10", "Height":"33" }]}';


let text13 = '{"Object":[' +
    '{"Name":"Bett", "Description":"Das ist ein Bett!", "Start":"185", "End":"195" },' +
    '{"Stage":1, "Start":"185", "End":"186", "X":"3", "Y":"10", "Width":"35", "Height":"40" },' +
    '{"Stage":2, "Start":"187", "End":"188", "X":"4", "Y":"10", "Width":"35", "Height":"40" },' +
    '{"Stage":2, "Start":"189", "End":"190", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":2, "Start":"191", "End":"192", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":3, "Start":"193", "End":"194", "X":"10", "Y":"10", "Width":"10", "Height":"10" }]}';

let text14 = '{"Object":[' +
    '{"Name":"Bild", "Description":"Das ist ein Bild!", "Start":"196", "End":"201" },' +
    '{"Stage":1, "Start":"196", "End":"199", "X":"199", "Y":"10", "Width":"10", "Height":"10" },' +
    '{"Stage":2, "Start":"200", "End":"201", "X":"20", "Y":"20", "Width":"25", "Height":"30" }]}';

let text15 = '{"Object":[' +
    '{"Name":"Kissen", "Description":"Das ist ein Kissen!", "Start":"204", "End":"213" },' +
    '{"Stage":1, "Start":"204", "End":"205", "X":"186", "Y":"10", "Width":"10", "Height":"10" },' +
    '{"Stage":2, "Start":"206", "End":"207", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":2, "Start":"208", "End":"209", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":2, "Start":"210", "End":"211", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":3, "Start":"212", "End":"213", "X":"10", "Y":"10", "Width":"10", "Height":"10" }]}';

let text16 = '{"Object":[' +
    '{"Name":"Wandregal", "Description":"Das ist ein Wandregal!", "Start":"230", "End":"236" },' +
    '{"Stage":1, "Start":"230", "End":"231", "X":"186", "Y":"10", "Width":"10", "Height":"10" },' +
    '{"Stage":2, "Start":"232", "End":"233", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":2, "Start":"234", "End":"235", "X":"20", "Y":"20", "Width":"25", "Height":"30" }]}';


//const obj = JSON.parse(text);
//const obj2 = JSON.parse(text2);
//const obj3 = JSON.parse(text3);
//const obj = JSON.parse(text7);
//const obj2 = JSON.parse(text8);
//const obj3 = JSON.parse(text9)
//const obj = JSON.parse(text10);
//const obj2 = JSON.parse(text11);
//const obj3 = JSON.parse(text12);
const obj = JSON.parse(text13);
const obj2 = JSON.parse(text14);
const obj3 = JSON.parse(text15);
const obj16 = JSON.parse(text16);
const objects = [obj, obj2, obj3, obj16];

//obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14,obj15,

// Not showing Buttons from the get-go
document.getElementById("box1").style.display = "none";
document.getElementById("box2").style.display = "none";
document.getElementById("box3").style.display = "none";


// Gets the video
const video = document.querySelector('video');

// Check time and do things
function checkPlaybackTime() {
    const currentTime = video.currentTime;

    let j = 0;
    while (j < objects.length) {

        let boxes = ["box1", "box2", "box3"];

        // Define when to show the object and when not
        if(objects[j].Object[0].Start <= currentTime && currentTime <= objects[j].Object[0].End) {
            document.getElementById(boxes[j]).style.display = "";
        }
        else {
            document.getElementById(boxes[j]).style.display = "none";
        }

        // Define how it should be moved based on the time
        let i = 1;
        while(i < objects[j].Object.length) {
            if(objects[j].Object[i].Start < currentTime && currentTime < objects[j].Object[i].End) {
                anime(objects[j].Object[i].X,objects[j].Object[i].Y, objects[j].Object[i].Width, objects[j].Object[i].Height, j);
            }
            i++;
        }
        j++;
    }
}


// moveable Box
function anime(x,y, width, height, number){
    if(number===0) {
        $('#box1')
            .animate({'marginLeft': x + '%'},1)
            .animate({'marginTop': y + '%'},1)
            .animate({'width': width + '%'}, 1)
            .animate({'height': height + '%'}, 1);
    }
    else if(number===1) {
        $('#box2')
            .animate({'marginLeft': x + '%'},1)
            .animate({'marginTop': y + '%'},1)
            .animate({'width': width + '%'}, 1)
            .animate({'height': height + '%'}, 1);
    }
    else if(number===2) {
        $('#box3')
            .animate({'marginLeft': x + '%'},1)
            .animate({'marginTop': y + '%'},1)
            .animate({'width': width + '%'}, 1)
            .animate({'height': height + '%'}, 1);
    }
}

// Show Text when buttons get pressed
function showText(objectNumber){
    if (objectNumber === 1) {
        document.getElementById("objectName").innerHTML = objects[0].Object[0].Name;
        document.getElementById("objectDescription").innerHTML = objects[0].Object[0].Description;
    }
    else if (objectNumber === 2) {
        document.getElementById("objectName").innerHTML = "test2";
        document.getElementById("objectDescription").innerHTML = "test2";
    }
    else if (objectNumber === 3) {
        document.getElementById("objectName").innerHTML = "test3";
        document.getElementById("objectDescription").innerHTML = "test3";
    }
}

// Check time every 5 Seconds
setInterval(checkPlaybackTime, 1000);