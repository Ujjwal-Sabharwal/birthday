function unwrapGift() {
    const giftBox = document.getElementById("giftBox");
    const card = document.getElementById("card");
    const birthdayMessage = document.getElementById("birthdayMessage");

    // Hide the present box
    giftBox.style.display = "none";

    // Show the card
    card.style.display = "flex"; // Ensure the card is displayed

    // Set the custom birthday message
    birthdayMessage.textContent = "Bhai ka birthday h sukha sukha wish kaise kr skte yay!! ab to tu bhi brabr ki budhi(old) ho gyi h chl aaj k din bol hi deta you are a good girl wishing you a great life ahead of you Take Care🌹";

    // Show the card with an animation
    card.classList.add("open");
}

function wrapGift() {
    const giftBox = document.getElementById("giftBox");
    const card = document.getElementById("card");
    const birthdayMessage = document.getElementById("birthdayMessage");

    // Hide the card and show the gift box again
    card.classList.remove("open");
    setTimeout(() => {
        card.style.display = "none";
        giftBox.style.display = "flex"; // Show the gift box again
        
        // Reset the message to the default message if you want
        birthdayMessage.textContent = "Wishing you a fantastic day filled with joy, love, and laughter! 🎉";
    }, 600); // delay to wait for the card close animation
}

