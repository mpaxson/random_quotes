/* Magic Mirror Module: random_quotes
 * v1.0 - June 2016
 *
 * By Ashley M. Kirchner <kirash4@gmail.com>
 * Beer Licensed (meaning, if you like this module, feel free to have a beer on me, or send me one.)
 */

Module.register("random_quotes", {

  /* Quotes are courtesy of BrainyQuote.com
     There is no 'automated' way to fetch random quotes from BrainyQuote.com. You'll have to
     manually do that yourself. Or find a free random quote API at which point you are welcome
     to rewrite this module to use that. All the ones I've found are paid services. Free ones
     only allow a single quote for the day. Kinda defeats the purpose.
   */

  // Module config defaults.
  defaults: {
    updateInterval: 60, // Value is in SECONDS
    fadeSpeed: 4, // How fast (in SECONDS) to fade out and back in when changing quotes
    category: 'random', // Category to use
    quotes: {
      "Brandon Sanderson": [
        '"It is not only the steps forward we must accept, it is the stumbles, the trials, the knowledge that we will fail...\
			But if we stop, if we accept the person we are when we fall, the journey ends. That failure becomes our destination... \
		  	I have found through painful experience, the most important step a man can take is always the next one."  Stormlight Archive book 3',
        '"The most important words a man can say are: \'I will do better. \' " Stormlight Archive book 3',
        'Ten spears go to battle and nine shatter. Did the war forge the one that remained? ... All the war did was identify the spear that would not break.” Stormlight Archive book 3',
        '"The question is not whether you will love, hurt, dream, or die. It is what you will love, why you will hurt, when you will dream, and how you will die. This is your choice. You cannot pick the destination, only the path." - Stormlight Archive book 3',
        '"Sometimes a hypocrite is just a man in the process of changing." - Stormlight Archive book 3',
        '"This is the act of childish men who assume I can be embarrassed by the truth. \
		  As I fear not a child with a weapon he can not lift, \
		  I will never fear the mind of a man who does not think." - Stormlight Archive, Book 2',
      ],

      "Ibern Ball": [
        '"Most of us can read the writing on the wall; we just assume it\'s addressed to someone else." - Ivern Ball',
      ],

      Voltaire: [
        '"Doubt is not a pleasant condition, but certainty is absurd." - Voltaire',
      ],

      Other: [
        '"You should be quick to say what you wish to say or hear. Some words ripen with age, but some also lose their color." - Magus Bride',
        '"Everything we experience is a tool for clearing one\'s path."',
        '"Intellectualism fuels the train to mankind\'s future. But the tracks the train runs on are forged from practicality." - Outer Worlds',
        '"Wolf has eyes for prey, Cow has eyes for hay, One of them\'s a killer, The other his buffet"',

      ],

      'Mark Twain': [
        '"Worrying is like paying a debt you don\'t owe" - Mark Twain',
      ],
      Aristotle: [
        '"The greater danger for most of us is not that our aim is high and we miss it, but it is low and we hit it." - Aristotle,',
      ],
      Aurelius: [
        '"Ask: What is so unbearable about this situation? Why can\'t you endure it? You will be embarrassed to answer." ~ Marcus Aurelius',
        '"You don\'t have to turn this into something. It doesn\'t have to upset you." ~ Marcus Aurelius',
        '"Be tolerant with others and strict with yourself." ~ Marcus Aurelius',
        '"The best revenge is not to be like your enemy." ~ Marcus Aurelius',
        '"Never Let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present." ~ Marcus Aurelius',
        '"Waste no more time arguing what a good man should be. Be One.", ~ Marcus Aurelius',
        '"Your task is to stand straight; not to be held straight." ~ Marcus Aurelius',
        '"First tell yourself what kind of person you want to be, then do what you have to do." - Marcus Aurelius',
        '"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth." - Marcus Aurelius',
        '"In your actions, don\'t procrastinate. In your conversations, don\'t confuse. In your thoughts don\'t be passive or aggressive." - Marcus Aurelius',
        '"Much more harmful are the consequences of anger and grief than the circumstances that aroused them in us!" - Marcus Aurelius',
      ],

      Epictetus: [
        '"First say to yourself what you would be; and then do what you have to do." ~ Epictetus',
        '"We have two ears and one mouth so that we can listen twice as much as we speak."  ~ Epictetus',
      ],

      Seneca: [
        '"We mortals also are lighted and extinguished; the period of suffering comes in between, but on either side there is a deep peace." ~ Seneca',
        '"Everyone hurries his life on and suffers from a yearning for the future and a weariness of the present. But he who bestows all of his time on his own needs, who plans out every day as if it were his last, neither longs for nor fears the morrow." ~ Seneca',
        '"No evil propensity of the human heart is so powerful that it may not be subdued by discipline." ~ Seneca',
        '"You act like mortals in all that you fear, and like immortals in all that you desire." ~ Seneca',
        '"Life is very short and anxious for those who forget the past, neglect the present, and fear the future." ~ Seneca',
        '"The man who has anticipated the coming of troubles takes away their power when they arrive." ~ Seneca',
        '"He is most powerful who has power over himself." ~ Seneca',
        '"These two things must be cut away: fear of the future, and the memory of past sufferings. The latter no longer concerns me, and the future does not concern me yet." ~ Seneca',
        '"Eyes will not see when the heart wishes them to be blind." ~ Seneca',
        '"A gem cannot be polished without friction, nor a man without trials." ~ Seneca',
        '"Fate leads the willing, and drags along the reluctant.", ~ Seneca',
        '"Only time can heal what reason cannot.", ~ Seneca',
        '"He suffers more than necessary, who suffers before it is necessary." ~ Seneca',
        '"What need is there to weep over parts of life? The whole of it calls for tears." ~ Seneca',
        '"It is not the man who has too little, but the man who craves more, that is poor." ~ Seneca',
        '"Difficulties strengthen the mind, as labor does the body." ~ Seneca',
        '"Luck is what happens when preparation meets opportunity.", ~ Seneca',
        '"Sometimes even to live is an act of courage." ― Seneca',
        '"Silence is a lesson learned from the many sufferings of life. " - Seneca',
      ],
      Oursler: [
        '"Many of us crucify ourselves between two thieves - regret for the past and fear of the future." ~ Fulton Oursler',
      ],
      Einstein: [
        '"Weakness of attitude becomes weakness of character." ~ Albert Einstein',
        '"In the middle of difficulty lies opportunity." ~ Albert Einstein',
        '"A clever person solves a problem. A wise person avoids it." ~ Albert Einstein',
        '"Once we accept our limits, we go beyond them." ~ Albert Einstein',
      ],
      "Harriet Beecher Stowe": [
        '"The bitterest tears shed over graves are for words left unsaid and deeds left undone." - Harriet Beecher Stowe',

      ],
    },
  },


  // Define start sequence.
  start: function() {
    Log.info("Starting module: " + this.name);

    this.lastQuoteIndex = -1;

    // Schedule update timer.
    var self = this;
    setInterval(function() {
      self.updateDom(self.config.fadeSpeed * 1000);
    }, this.config.updateInterval * 1000);
  },

  /* randomIndex(quotes)
   * Generate a random index for a list of quotes.
   *
   * argument quotes Array<String> - Array with quotes.
   *
   * return Number - Random index.
   */
  randomIndex: function(quotes) {
    if (quotes.length === 1) {
      return 0;
    }

    var generate = function() {
      return Math.floor(Math.random() * quotes.length);
    };

    var quoteIndex = generate();

    while (quoteIndex === this.lastQuoteIndex) {
      quoteIndex = generate();
    }

    this.lastQuoteIndex = quoteIndex;

    return quoteIndex;
  },

  /* quoteArray()
   * Retrieve an array of quotes for the time of the day.
   *
   * return quotes Array<String> - Array with quotes for the time of the day.
   */
  quoteArray: function() {
    if (this.config.category == 'random') {
      return this.config.quotes[Object.keys(this.config.quotes)[Math.floor(Math.random() * Object.keys(this.config.quotes).length)]];
    } else {
      return this.config.quotes[this.config.category];
    }
  },

  /* randomQuote()
   * Retrieve a random quote.
   *
   * return quote string - A quote.
   */
  randomQuote: function() {
    var quotes = this.quoteArray();
    var index = this.randomIndex(quotes);
    //return quotes[index].split(" ~ ");
    return quotes[index];

  },

  // Override dom generator.
  getDom: function() {
    var quoteText = this.randomQuote();
    var qMsg = quoteText;

    // 		var qMsg = quoteText[0];
    // 		var qAuthor = quoteText[1];

    var wrapper = document.createElement("div");

    var quote = document.createElement("div");
    quote.className = "bright medium light";
    quote.style.textAlign = 'center';
    quote.style.margin = '0 auto';
    // 		quote.style.maxWidth = '50%';
    quote.innerHTML = qMsg;

    wrapper.appendChild(quote);

    // 		var author = document.createElement("div");
    // 		author.className = "light small dimmed";
    // 		author.innerHTML = "~ " + qAuthor;
    //
    // 		wrapper.appendChild(author);

    return wrapper;
  }

});
