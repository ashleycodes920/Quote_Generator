//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "At the end of the day, we can endure much more than we think we can.",
      author: "Frida Kahlo"
    },
    {
      quote:
        "Fight for the things that you care about, but do it in a way that will lead others to join you.",
      author: "Ruth Bader Ginsburg"
    },
    {
      quote:
        "Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "The most difficult thing is the decision to act. The rest is merely tenacity.",
      author: "Amelia Earhart"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
