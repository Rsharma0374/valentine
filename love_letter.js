$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  var messages = [
    "Dear Crush, you are the reason my heart beats faster.",
    "Every time I see you, the world feels like a beautiful dream.",
    "You have the most amazing smile that lights up my day!",
    "If I had a flower for every time I thought of you, I'd have a garden.",
    "Your kindness and beauty make the world a better place.",
    "Every time I see you, my heart whispers, ‘That’s the one.’",
    "Your smile is my favorite sight in the world.",
    "I never believed in love at first sight until I met you.",
    "Being around you feels like a dream I never want to wake up from.",
    "You make my world brighter just by being in it.",
    "You are the missing piece I never knew I needed.",
    "If love was a song, you’d be my favorite melody.",
    "I don’t need the stars because you light up my life.",
    "I could write a thousand love letters and still not express how much you mean to me.",
    "Every little thing you do makes my heart skip a beat.",
    "Your laughter is the sweetest music to my ears.",
    "I find myself smiling whenever I think of you.",
    "You are not just a crush, you are the reason my heart races.",
    "You make my world feel like a fairytale.",
    "If love was a journey, I’d want to walk every step with you.",
    "I wish I could pause time whenever I’m with you.",
    "No matter how dark my day is, your presence brings light.",
    "I secretly hope you feel the same way about me as I do about you.",
    "You are the kind of magic I never knew existed.",
    "Every time you talk to me, I forget how to breathe.",
    "You are the sweetest dream I never want to wake up from.",
    "I don’t need paradise because I found you.",
    "Your kindness and beauty make my heart melt.",
    "You have no idea how much happiness you bring into my life.",
    "I never knew what butterflies felt like until I met you.",
    "You are my definition of perfection.",
    "Every second with you is a moment I treasure.",
    "The best part of my day is when I see you smile.",
    "I don’t know what love is, but I know it starts with you.",
    "You are the reason my heart beats with excitement every day."
  ];

  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function openEnvelope() {
    var newMessage = getRandomMessage();
    $(".line2").text(newMessage); // Update the message dynamically
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }

  envelope.click(openEnvelope);
  btn_open.click(openEnvelope);
  btn_reset.click(closeEnvelope);
});
