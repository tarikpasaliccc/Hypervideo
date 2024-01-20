//JSON shenanigans
let text = '{"Object":[' +
    '{"Name":"SKARVLO", "Description":"Under the slatted base, which can be lifted, hides a practical storage space. The simple and versatile design coordinates well with other bedroom furniture and fits perfectly in any modern bedroom. If you read or watch TV in bed the soft headboard is comfortable to lean against.","IkeaLink":"https://www.ikea.com/at/en/p/skarvlo-ottoman-bed-grey-70556086/", "Start":"0", "End":"25" },' +
    '{"Stage":1, "Start":"0", "End":"4", "X":"20", "Y":"5", "Width":"35", "Height":"60" },' +
    '{"Stage":2, "Start":"5", "End":"7", "X":"20", "Y":"10", "Width":"25", "Height":"50" },' +
    '{"Stage":3, "Start":"8", "End":"10", "X":"20", "Y":"20", "Width":"25", "Height":"30" },' +
    '{"Stage":4, "Start":"11", "End":"17", "X":"15", "Y":"25", "Width":"25", "Height":"15" },' +
    '{"Stage":5, "Start":"18", "End":"20", "X":"23", "Y":"25", "Width":"25", "Height":"15" },'+
    '{"Stage":6, "Start":"21", "End":"25", "X":"35", "Y":"25", "Width":"25", "Height":"15" }]}';

let text2 = '{"Object":[' +
    '{"Name":"REGOLIT / HEMMA", "Description":"You can create a soft, cosy atmosphere in your home with a paper lamp that spreads a diffused and decorative light. Use a cord set to easily adjust the length of the cord for your pendant lamp. When the lamp hangs at the perfect height, gather the remaining cord in the ceiling cup and then mount it tight to the ceiling.", "IkeaLink":"https://www.ikea.com/at/en/p/regolit-hemma-pendant-lamp-white-s19444083/", "Start":"7", "End":"25" },' +
    '{"Stage":1, "Start":"7", "End":"8", "X":"30", "Y":"0", "Width":"10", "Height":"10" },' +
    '{"Stage":2, "Start":"9", "End":"10", "X":"25", "Y":"0", "Width":"20", "Height":"25" },' +
    '{"Stage":3, "Start":"11", "End":"17", "X":"19", "Y":"0", "Width":"20", "Height":"30" },' +
    '{"Stage":4, "Start":"18", "End":"20", "X":"35", "Y":"0", "Width":"20", "Height":"30" },' +
    '{"Stage":5, "Start":"21", "End":"22", "X":"45", "Y":"0", "Width":"20", "Height":"25" },' +
    '{"Stage":6, "Start":"23", "End":"24", "X":"45", "Y":"0", "Width":"20", "Height":"10" }]}';

let text3 = '{"Object":[' +
    '{"Name":"HEMNES", "Description":"The sturdy solid pine frame has natural variations in grain, colour and texture, giving every piece a unique look. And it has been stained and lacquered making it more durable and easy to care for. You can sit up comfortably in bed thanks to the high headboard – just prop some pillows behind your back and you will have a comfortable place to read or watch TV. Beautiful craftsmanship all the way around. Why not place it in the middle of the room to create impact? There’s plenty of space under the bed for storage boxes – great for stowing extra duvets and sheets. The high footboard keeps bed textiles from falling onto the floor while you sleep. Adjustable bed sides allow you to use mattresses of different thicknesses. LINDBÅDEN slatted bed base with flat slats creates a firm and uniform foundation for the mattress, while the open construction allows air to circulate and keeps the mattress fresh.", "IkeaLink":"https://www.ikea.com/at/en/p/hemnes-bed-frame-white-stain-lindbaden-s69494914/", "Start":"28", "End":"54" },' +
    '{"Stage":29, "Start":"28", "End":"30", "X":"15", "Y":"25", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"31", "End":"33", "X":"15", "Y":"20", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"34", "End":"36", "X":"15", "Y":"15", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"40", "End":"46", "X":"15", "Y":"5", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"47", "End":"49", "X":"5", "Y":"5", "Width":"35", "Height":"60" },'+
    '{"Stage":200, "Start":"50", "End":"70", "X":"0", "Y":"5", "Width":"15", "Height":"55" }]}';

let text4 = '{"Object":[' +
    '{"Name":"PLUTTIS", "Description": "Grosse und deutliche Zahlen machen das Zeitablesen einfach. Kein stoerendes Tickgeraeusch, da die Uhr ueber ein Quarzuhrwerk verfuegt. Dank Quarzuhrwerk besonders praezise.","IkeaLink":"https://www.ikea.com/at/en/p/pluttis-wall-clock-low-voltage-red-30540851/#content", "Start":"53", "End":"78" },' +
    '{"Stage":29, "Start":"53", "End":"54", "X":"50", "Y":"0", "Width":"8", "Height":"15" },' +
    '{"Stage":200, "Start":"55", "End":"55", "X":"45", "Y":"0", "Width":"8", "Height":"15" },' +
    '{"Stage":200, "Start":"56", "End":"58", "X":"40", "Y":"1", "Width":"8", "Height":"15" },' +
    '{"Stage":200, "Start":"59", "End":"60", "X":"30", "Y":"5", "Width":"8", "Height":"15" },' +
    '{"Stage":200, "Start":"61", "End":"62", "X":"25", "Y":"10", "Width":"8", "Height":"15" },'+
    '{"Stage":200, "Start":"62", "End":"64", "X":"20", "Y":"15", "Width":"8", "Height":"15" },'+
    '{"Stage":200, "Start":"65", "End":"69", "X":"18", "Y":"18", "Width":"8", "Height":"15" },'+
    '{"Stage":200, "Start":"70", "End":"73", "X":"18", "Y":"23", "Width":"8", "Height":"15" },'+
    '{"Stage":200, "Start":"74", "End":"78", "X":"18", "Y":"25", "Width":"8", "Height":"15" }]}';


let text5 = '{"Object":[' +
    '{"Name":"HUVUDSPELARE", "Description":"3 year guarantee. Read about the terms in the guarantee brochure. It should be comfortable to play, especially when a match drags on. That’s why the table top is deep – so you can position screens at a comfortable distance from your eyes. Durable desk surface that is easy on your eyes since the light reflection is low. It’s easy to keep the desk neat and tidy by using the cable trunking under the table top. You can always have your headphones close at hand thanks to the included hook. The large table top holds two 24-inch screens. If you want to create a complete gaming station, you can add HUVUDSPELARE gaming chair. It matches perfectly.","IkeaLink":"https://www.ikea.com/at/en/p/huvudspelare-gaming-desk-black-90539166/", "Start":"79", "End":"86" },' +
    '{"Stage":1, "Start":"79", "End":"83", "X":"15", "Y":"25", "Width":"35", "Height":"60" },' +
    '{"Stage":2, "Start":"84", "End":"86", "X":"12", "Y":"15", "Width":"35", "Height":"30" }]}';

let text6 = '{"Object":[' +
    '{"Name":"HEMNES", "Description":"The sturdy solid pine frame has natural variations in grain, colour and texture, giving every piece a unique look. And it has been stained and lacquered making it more durable and easy to care for. You can sit up comfortably in bed thanks to the high headboard – just prop some pillows behind your back and you will have a comfortable place to read or watch TV. Beautiful craftsmanship all the way around. Why not place it in the middle of the room to create impact? There’s plenty of space under the bed for storage boxes – great for stowing extra duvets and sheets. The high footboard keeps bed textiles from falling onto the floor while you sleep. Adjustable bed sides allow you to use mattresses of different thicknesses. LINDBÅDEN slatted bed base with flat slats creates a firm and uniform foundation for the mattress, while the open construction allows air to circulate and keeps the mattress fresh.", "IkeaLink":"https://www.ikea.com/at/en/p/hemnes-bed-frame-white-stain-lindbaden-s69494914/", "Start":"28", "End":"54" },' +
    '{"Stage":29, "Start":"28", "End":"30", "X":"15", "Y":"25", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"31", "End":"33", "X":"15", "Y":"20", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"34", "End":"36", "X":"15", "Y":"15", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"40", "End":"46", "X":"15", "Y":"5", "Width":"35", "Height":"60" },' +
    '{"Stage":200, "Start":"47", "End":"49", "X":"5", "Y":"5", "Width":"35", "Height":"60" },'+
    '{"Stage":200, "Start":"50", "End":"70", "X":"0", "Y":"5", "Width":"15", "Height":"55" }]}';



let text7 = '{"Object":[' +
    '{"Name":"SOEDERHAMN", "Description":"In SOEDERHAMN Polstermoebeln mit niedriger, tiefer, weicher Sitzflaeche sorgen lose Rueckenkissen fuer zusaetzlichen Halt. Leichtes, luftiges Design mit hohen Beinen und schlanken Linien, trotzdem mit grossem Komfort dank des elastischen Geflechts im Boden und des hochelastischen Schaums in den Sitzpolstern. Die einzelnen Elemente des Sofas koennen frei stehend genutzt oder vielseitig zu einer Groesse und Form kombiniert werden, die ideal in dein Zuhause passt.","IkeaLink":"https://www.ikea.com/at/en/p/soederhamn-3-seat-section-hillared-dark-blue-s09430557/#content", "Start":"128", "End":"149" },' +
    '{"Stage":1, "Start":"128", "End":"147", "X":"12", "Y":"15", "Width":"35", "Height":"30" }]}';

let text8 = '{"Object":[' +
    '{"Name":"EKET", "Description":"Durch Kombination von offener und geschlossener Aufbewahrung laesst sich Dekoratives und Nuetzliches nach Bedarf zeigen oder verbergen. Eine niedrige Kombination bietet praktische Aufbewahrung z.B. unter einem Fenster. Dank des integrierten Druckoeffners laesst sich die Tuer mit einem leichten Druck oeffnen.","IkeaLink":"https://www.ikea.com/at/en/p/eket-cabinet-combination-with-legs-white-wood-s79388003/", "Start":"150", "End":"157" },' +
    '{"Stage":1, "Start":"150", "End":"151", "X":"35", "Y":"10", "Width":"20", "Height":"40" },' +
    '{"Stage":2, "Start":"152", "End":"153", "X":"31", "Y":"15", "Width":"20", "Height":"35" },' +
    '{"Stage":3, "Start":"154", "End":"155", "X":"29", "Y":"20", "Width":"20", "Height":"25" },' +
    '{"Stage":4, "Start":"156", "End":"157", "X":"30", "Y":"22", "Width":"20", "Height":"20" }]}';

let text9 = '{"Object":[' +
    '{"Name":"PEKTOLIT / HEMMA", "Description":"Easy to take home since the lampshade comes in a flat-pack.You can create a soft, cosy atmosphere in your home with a textile shade that spreads a diffused and decorative light. Use a cord set to easily adjust the length of the cord for your pendant lamp. When the lamp hangs at the perfect height, gather the remaining cord in the ceiling cup and then mount it tight to the ceiling.", "IkeaLink":"https://www.ikea.com/at/en/p/pektolit-hemma-pendant-lamp-white-s99526584/", "Start":"158", "End":"165" },' +
    '{"Stage":1, "Start":"158", "End":"159", "X":"40", "Y":"10", "Width":"20", "Height":"25" },' +
    '{"Stage":2, "Start":"160", "End":"161", "X":"40", "Y":"11", "Width":"20", "Height":"25" },' +
    '{"Stage":2, "Start":"162", "End":"163", "X":"40", "Y":"13", "Width":"20", "Height":"25" },' +
    '{"Stage":3, "Start":"164", "End":"165", "X":"40", "Y":"15", "Width":"20", "Height":"25" }]}';

let text10 = '{"Object":[' +
    '{"Name":"HEMNES", "Description":"Mit diesem Tagesbett bereitest du im Handumdrehen Platz fuer Uebernachtungsgaeste. Einfach die Liegeflaeche herausziehen - voila! Ein bequemes Doppelbett! In den geraeumigen Schubkaesten ist viel Platz fuer Decken, Kissen, Bettwaesche oder anderes, was du gern griffbereit, aber ausser Sichtweite unterbringst. Der Bettrahmen ist lackiert, damit er besonders pflegeleicht wird. Durch seine wohnliche Hoehe wirkt das Bett wie eine gemuetliche Koje.","IkeaLink":"https://www.ikea.com/at/en/p/hemnes-day-bed-frame-with-3-drawers-white-90349326/" ,"Start":"166", "End":"183" },' +
    '{"Stage":1, "Start":"166", "End":"170", "X":"20", "Y":"15", "Width":"35", "Height":"33" },' +
    '{"Stage":2, "Start":"171", "End":"174", "X":"20", "Y":"15", "Width":"35", "Height":"33" },' +
    '{"Stage":3, "Start":"175", "End":"184", "X":"20", "Y":"15", "Width":"38", "Height":"33" }]}';

let text11 = '{"Object":[' +
    '{"Name":"HEMNES Kommode", "Description":"Aus Massivholz, einem strapazierfaehigen, lebendigen Naturmaterial. Mit zusaetzlicher Innenschublade, praktisch fuer kleine Dinge wie Schmuck usw. Leichtgaengige Schubladen mit Ausziehsperre. Kann auch als Ablagetisch verwendet werden.","IkeaLink":"https://www.ikea.com/at/en/p/hemnes-chest-of-2-drawers-white-stain-80242627/" ,"Start":"166", "End":"183" },' +
    '{"Stage":1, "Start":"166", "End":"170", "X":"7", "Y":"20", "Width":"10", "Height":"25" },' +
    '{"Stage":2, "Start":"171", "End":"175", "X":"5", "Y":"20", "Width":"10", "Height":"25" },' +
    '{"Stage":3, "Start":"176", "End":"178", "X":"5", "Y":"20", "Width":"10", "Height":"25" },' +
    '{"Stage":4, "Start":"179", "End":"183", "X":"7", "Y":"20", "Width":"10", "Height":"25" }]}';

let text12 = '{"Object":[' +
    '{"Name":"IDANAS", "Description":"You can run the plug to the socket through the backside. The open shelf makes it easy for you to see and reach your things. The drawers close silently and softly, thanks to the integrated soft-closing function.","IkeaLink":"https://www.ikea.com/at/en/p/idanaes-bedside-table-dark-brown-stained-80458815/", "Start":"185", "End":"190" },' +
    '{"Stage":1, "Start":"185", "End":"186", "X":"40", "Y":"15", "Width":"15", "Height":"25" },' +
    '{"Stage":2, "Start":"187", "End":"188", "X":"44", "Y":"15", "Width":"15", "Height":"30" },' +
    '{"Stage":3, "Start":"189", "End":"190", "X":"48", "Y":"15", "Width":"10", "Height":"33" }]}';

let text13 = '{"Object":[' +
    '{"Name":"TARVA", "Description":"Das robuste massive Kiefernholz ist ein lebendiges Naturmaterial - durch seine Varianten in Maserung, Farbe und Struktur wirkt jedes Stueck einmalig. Durch Oelen, Lasieren oder Lackieren wird die unbehandelte Massivholzoberflaeche noch strapazierfaehiger und pflegeleichter. Unter dem Bett ist jede Menge Platz fuer Bettkaesten. Ideal zum Verstauen von zusaetzlichen Decken, Kissen.", "IkeaLink":"https://www.ikea.com/at/en/p/tarva-bed-frame-pine-s69929233/", "Start":"185", "End":"195" },' +
    '{"Stage":1, "Start":"185", "End":"186", "X":"3", "Y":"10", "Width":"35", "Height":"40" },' +
    '{"Stage":2, "Start":"187", "End":"188", "X":"4", "Y":"10", "Width":"35", "Height":"40" },' +
    '{"Stage":2, "Start":"189", "End":"190", "X":"5", "Y":"10", "Width":"35", "Height":"35" },' +
    '{"Stage":2, "Start":"191", "End":"192", "X":"5", "Y":"1ß", "Width":"40", "Height":"35" },' +
    '{"Stage":3, "Start":"193", "End":"194", "X":"5", "Y":"10", "Width":"40", "Height":"35" }]}';

let text14 = '{"Object":[' +
    '{"Name":"LOMVIKEN", "Description":"This frame is ideal to use with ALFTA adhesive hook. With the hook you can easily hang the frame without nails or screws and decorate your walls with pictures. Available in different sizes. The frame can be used horizontally or vertically, whichever suits you or your picture best. Front protection in plastic makes the frame safer to use. PH-neutral mount; will not discolour the picture.", "IkeaLink":"https://www.ikea.com/at/en/p/lomviken-frame-gold-colour-80419414/", "Start":"196", "End":"202" },' +
    '{"Stage":1, "Start":"196", "End":"199", "X":"30", "Y":"5", "Width":"10", "Height":"20" },' +
    '{"Stage":2, "Start":"200", "End":"202", "X":"30", "Y":"1", "Width":"10", "Height":"20" }]}';

let text15 = '{"Object":[' +
    '{"Name":"HEDBLOMSTER", "Description":"Embroidery adds texture and lustre to the cushion. You can easily vary the look because the two sides have different designs. The duck feather filling feels fluffy and gives your body excellent support. The buttons make the cover easy to remove.", "IkeaLink":"https://www.ikea.com/at/en/p/hedblomster-cushion-multicolour-00264029/", "Start":"204", "End":"213" },' +
    '{"Stage":1, "Start":"204", "End":"205", "X":"25", "Y":"20", "Width":"20", "Height":"20" },' +
    '{"Stage":2, "Start":"206", "End":"207", "X":"27", "Y":"20", "Width":"20", "Height":"20" },' +
    '{"Stage":2, "Start":"208", "End":"209", "X":"29", "Y":"18", "Width":"20", "Height":"20" },' +
    '{"Stage":2, "Start":"210", "End":"211", "X":"31", "Y":"16", "Width":"20", "Height":"20" },' +
    '{"Stage":3, "Start":"212", "End":"213", "X":"33", "Y":"14", "Width":"20", "Height":"20" }]}';

let text16 = '{"Object":[' +
    '{"Name":"EKET Configurator", "Description":"The EKET configurator lets your creativity run wild! Choose between free planning or start your planning based on our suggestions. The EKET shelf configurator works online, so you can get started straight away.", "IkeaLink":"https://www.ikea.com/at/en/planners/eket-planner/", "Start":"230", "End":"236" },' +
    '{"Stage":1, "Start":"230", "End":"231", "X":"1", "Y":"1", "Width":"40", "Height":"25" },' +
    '{"Stage":2, "Start":"232", "End":"233", "X":"1", "Y":"1", "Width":"45", "Height":"30" },' +
    '{"Stage":2, "Start":"234", "End":"235", "X":"1", "Y":"1", "Width":"45", "Height":"30" }]}';


const obj = JSON.parse(text);
const obj2 = JSON.parse(text2);
const obj3 = JSON.parse(text3);
const obj4 = JSON.parse(text4);
const obj5 = JSON.parse(text5);
const obj6 = JSON.parse(text6);
const obj7 = JSON.parse(text7);
const obj8 = JSON.parse(text8);
const obj9 = JSON.parse(text9)
const obj10 = JSON.parse(text10);
const obj11 = JSON.parse(text11);
const obj12 = JSON.parse(text12);
const obj13 = JSON.parse(text13);
const obj14 = JSON.parse(text14);
const obj15 = JSON.parse(text15);
const obj16 = JSON.parse(text16);
const objects = [obj, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14,obj15, obj16];

// Not showing Buttons from the get-go
document.getElementById("box1").style.display = "none";
document.getElementById("box2").style.display = "none";
document.getElementById("box3").style.display = "none";
document.getElementById("box4").style.display = "none";
document.getElementById("box5").style.display = "none";
document.getElementById("box6").style.display = "none";
document.getElementById("box7").style.display = "none";
document.getElementById("box8").style.display = "none";
document.getElementById("box9").style.display = "none";
document.getElementById("box10").style.display = "none";
document.getElementById("box11").style.display = "none";
document.getElementById("box12").style.display = "none";
document.getElementById("box13").style.display = "none";
document.getElementById("box14").style.display = "none";
document.getElementById("box15").style.display = "none";
document.getElementById("box16").style.display = "none";


// Gets the video
const video = document.querySelector('video');

// Check time and do things
function checkPlaybackTime() {
    const currentTime = video.currentTime;

    let j = 0;
    while (j < objects.length) {

        let boxes = ["box1", "box2", "box3","box4","box5","box6","box7","box8","box9","box10","box11","box12","box13","box14","box15","box16"];

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
         $(`#box${number+1}`)
            .animate({'marginLeft': x + '%'},1)
            .animate({'marginTop': y + '%'},1)
            .animate({'width': width + '%'}, 1)
            .animate({'height': height + '%'}, 1);
}

// Show Text when buttons get pressed
function showText(objectNumber){
        document.getElementById("objectName").innerHTML = objects[objectNumber-1].Object[0].Name;
        document.getElementById("objectDescription").innerHTML = objects[objectNumber-1].Object[0].Description;
    document.getElementById("objectLink").innerHTML = objects[objectNumber-1].Object[0].IkeaLink;
    document.getElementById("objectLink").href = objects[objectNumber-1].Object[0].IkeaLink;
}

// Check time every 5 Seconds
setInterval(checkPlaybackTime, 1000);