exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert([
        {
          id: 1,
          name: "Alia",
          image_URL:
            "https://www.globalgiving.org/learn/wp-content/uploads/2017/06/01-Alia-Gruppo-Aleimar.jpg",
          quote:
            "Alia fled her home in Aleppo, Syria and is currently living in Damour, Lebanon. Alia is 7 years old.",
          content:
            "The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents. The roads were full of dead corpses. I saw dead people with no heads or no hands or legs. I was so shocked I couldn’t stop crying. To calm me down, my grandfather told me they were mean people, but I still prayed for them, because even if some considered them mean, they were still dead human beings. Back at home, I left a friend in Syria, her name was Rou’a. I miss her a lot and I miss going to school with her. I used to play with her with my Atari but I couldn’t bring it with me. I also used to have pigeons, one of them had eggs, I would feed them and care for them. I’m worried about them, I really pray someone is still caring for them. But here I have a small kitten that I really love! I miss my home a lot. I hope one day we’ll be back and things will be just like before.",
          author: "Miranda Cleland at globalgiving.org",
          approved: true
        },
        {
          id: 2,
          name: "Achan",
          image_URL:
            "https://www.globalgiving.org/learn/wp-content/uploads/2017/06/05-Achan-Hope-Ofiriha.jpg",
          quote:
            "Achan fled her home in Pajok, South Sudan and is currently living in a refugee camp in Lamwo District, Uganda.",
          content:
            "Achan is a widow who had eight children. Seven of her children died during the ongoing war in her home country of South Sudan. As a result, she was left with many orphans to take care of. Before the war, she was a peasant farmer in Sudan who cultivated to sustain her big family. When the war broke out in her community, she and her family ran to save their lives, leaving all their belongings behind. She believes her home has been destroyed by the rebels.",
          author: "Miranda Cleland at globalgiving.org",
          approved: true
        },
        {
          id: 3,
          name: "Sabri",
          image_URL:
            "https://www.globalgiving.org/learn/wp-content/uploads/2017/06/04-Sabri-Emfasis-remember-to-add-credit-back-in-since-i-cropped-it-out-of-photo.jpg",
          quote:
            "Sabri fled his home in Aleppo, Syria and is currently living in Paiania, Greece. Sabri is 16 years old.",
          content:
            "I am currently staying at a guesthouse for minors and families in Paiania, just outside Athens, Greece with my family. I’d like to go to Germany. We already know my family and I were granted permission to relocate to a German city. We are hoping to start a new page in our lives. I wish I could make people love each other – that is my dream.",
          author: "Miranda Cleland at globalgiving.org",
          approved: true
        }
      ]);
    });
};
