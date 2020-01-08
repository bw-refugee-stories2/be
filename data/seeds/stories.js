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
        },
        {
          id: 4,
          name: "Shahid",
          image_URL:
            "https://www.globalgiving.org/learn/wp-content/uploads/2017/06/06-Shahid-GHNI.jpg",
          quote:
            "Shahid fled his home in Aleppo, Syria and is currently living is living in an abandoned factory with his wife and other families in Sulaymaniyah, Iraq.",
          content:
            "We hid ourselves on the mountain for about eight nights. From the mountain, we saw a battle between [the violent group] and the PKK (Kurdish forces), who fought very courageously. After the sun set, we went to them. They treated us with much respect and took us to a place where there were lots of Yazidis and gave us food. Thus, after eight days of walking between the Iraq and Syrian borders, they helped us reach a quiet region in Northern Iraq. From there, we drove to Sulaymaniyah City.",
          approved: true
        },
        {
          id: 5,
          name: "Shafaq",
          image_URL:
            "https://www.globalgiving.org/learn/wp-content/uploads/2017/06/08-Shafaq-Middle-East-Childrens-Alliance_800.jpg",
          quote:
            "Shafaq fled her home in Dera’a, Syria and is currently living with her family in Bekaa, Lebanon. Shafaq is 14 years old.",
          content:
            "I used to have a peaceful life and live in my amazing home in Dera’a. I enjoyed the nature around my house and the food coming from the land. I woke up every morning to the sound of birds singing. The brutality of the civil war forced my family to leave this house and to start the journey to be refugees. Since the start of our journey, we moved a lot in Lebanon and I attended different schools. In the end my family decided to go close to the border with Syria. We came to this area because just we want to survive. My father is working as an electrician and this is the only income for our family. All of my family we are living in a tiny house with one bedroom, a small kitchen and a bathroom. We are considered illegal because we don’t have official documents.",
          approved: true
        },
        {
          id: 6,
          name: "Abdul",
          image_URL:
            "https://www.globalgiving.org/learn/wp-content/uploads/2017/06/11-Abdul-Aziz-IHPA.jpg",
          quote:
            "Abdul fled his home in Homs, Syria and is now living in Amman, Jordan.",
          content:
            "Abdul now lives in an apartment building with forty female head of household refugee families in Amman. His father was killed in Syria. He has been seen a number of times in the psychosocial clinic run within the apartment building. Staff from International Humanistic Psychology Association visited his school because of his complaints of being bullied by one particular student. He couldn’t believe they would come to try to help him as he had tried with the school teacher and felt unheard. He said it was one of the best things that had happened for him since they came to Jordan. Abdul hopes to drive buses, likes to help others, and loves soccer.",
          author: "Miranda Cleland at globalgiving.org",
          approved: true
        }
      ]);
    });
};
