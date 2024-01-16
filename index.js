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

const obj = JSON.parse(text);
const obj2 = JSON.parse(text2);
const obj3 = JSON.parse(text3);
const objects = [obj, obj2, obj3];


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