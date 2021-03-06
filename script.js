// speed for all the typewriters
var speed = 30;
// typewriter 1
var startingText = 0;
var txt =
  "And surely you have seen, in the darkness of the innermost rooms of these huge buildings, to which sunlight never penetrates, how the gold leaf of a sliding door or screen will pick up a distant glimmer from the garden, then suddenly send forth an ethereal glow, a faint golden light cast into the enveloping darkness, like the glow upon the horizon at sunset. In no other setting is gold quite so exquisitely beautiful. You walk past, turning to look again, and yet again; and as you move away the golden surface of the paper glows ever more deeply, changing not in a flash, but growing slowly, steadily brighter, like color rising in the face of a giant. Or again you may find that the gold dust of the background, which until that moment had only a dull, sleepy luster, will, as you move past, suddenly gleam forth as if it had burst into flame.";
function typeWriter() {
  if (startingText < txt.length) {
      document.querySelector(".one-animation").innerHTML += txt.charAt(startingText);
      startingText++;
    setTimeout(typeWriter, speed);
  }
}
// typewriter 2
typeWriter();
var startingText2 = 0;
var txt2 =
"How, in such a dark place, gold draws so much light to itself is a mystery to me. But I see why in ancient times statues of the Buddha were gilt with gold and why gold leaf covered the walls of the homes of the nobility. Modem man, in his well-lit house, knows nothing of the beauty of gold; but those who lived in the dark houses of the past were not merely captivated by its beauty, they also knew its practical value; for gold, in these dim rooms, must have served the function of a reflector. Their use of gold leaf and gold dust was not mere extravagance. Its reflective properties were put to use as a source of illumination. Silver and other metals quickly lose their gloss, but gold retains its brilliance indefinitely to light the darkness of the room. This is why gold was held in such incredibly high esteem.";
function typeWriter2() {
  if (startingText2 < txt2.length) {
      document.querySelector(".two-animation").innerHTML += txt2.charAt(startingText2);
      startingText2++;
    setTimeout(typeWriter2, speed);
  }
}
typeWriter2();

// typewriter 3
var startingText3 = 0;
var txt3 =
  "In temple architecture the main room stands at a considerable distance from the garden; so dilute is the light there that no matter what the season, on fair days or cloudy, morning, midday, or evening, the pale, white glow scarcely varies. And the shadows at the interstices of the ribs seem strangely immobile, as if dust collected in the corners had become a part of the paper itself. I blink in uncertainty at this dreamlike luminescence, feeling as though some misty film were blunting my vision. The light from the pale white paper, powerless to dispel the heavy darkness of the alcove, is instead repelled by the darkness, creating a world of confusion where dark and light are indistinguishable. Have not you yourselves sensed a difference in the light that suffuses such a room, a rare tranquility not found in ordinary light? Have you never felt a sort of fear in the face of the ageless, a fear that in that room you might lose all consciousness of the passage of time, that untold years might pass and upon emerging you should find you had grown old and gray?";
function typeWriter3() {
  if (startingText3 < txt3.length) {
      document.querySelector(".three-animation").innerHTML += txt3.charAt(startingText3);
      startingText3++;
    setTimeout(typeWriter3, speed);
  }
}
typeWriter3();

// typewriter 4
var startingText4 = 0;
var txt4 =
"How, in such a dark place, gold draws so much light to itself is a mystery to me. But I see why in ancient times statues of the Buddha were gilt with gold and why gold leaf covered the walls of the homes of the nobility. Modem man, in his well-lit house, knows nothing of the beauty of gold; but those who lived in the dark houses of the past were not merely captivated by its beauty, they also knew its practical value; for gold, in these dim rooms, must have served the function of a reflector. Their use of gold leaf and gold dust was not mere extravagance. Its reflective properties were put to use as a source of illumination. Silver and other metals quickly lose their gloss, but gold retains its brilliance indefinitely to light the darkness of the room. This is why gold was held in such incredibly high esteem.";
function typeWriter4() {
  if (startingText4 < txt4.length) {
      document.querySelector(".fourth-animation").innerHTML += txt4.charAt(startingText4);
      startingText4++;
    setTimeout(typeWriter4, speed);
  }
}
typeWriter4();

// typewriter 5
var startingText5 = 0;
var txt5 =
  "In temple architecture the main room stands at a considerable distance from the garden; so dilute is the light there that no matter what the season, on fair days or cloudy, morning, midday, or evening, the pale, white glow scarcely varies. And the shadows at the interstices of the ribs seem strangely immobile, as if dust collected in the corners had become a part of the paper itself. I blink in uncertainty at this dreamlike luminescence, feeling as though some misty film were blunting my vision. The light from the pale white paper, powerless to dispel the heavy darkness of the alcove, is instead repelled by the darkness, creating a world of confusion where dark and light are indistinguishable. Have not you yourselves sensed a difference in the light that suffuses such a room, a rare tranquility not found in ordinary light? Have you never felt a sort of fear in the face of the ageless, a fear that in that room you might lose all consciousness of the passage of time, that untold years might pass and upon emerging you should find you had grown old and gray?";
function typeWriter5() {
  if (startingText5 < txt5.length) {
      document.querySelector(".fifth-animation").innerHTML += txt5.charAt(startingText5);
      startingText5++;
    setTimeout(typeWriter5, speed);
  }
}
typeWriter5();
