(function (window) {

	function Deck(config) {
		this.element = document.getElementById(config.element);
    var test = document.createElement("div");
    test.dataset.cardValue = "1";
    test.dataset.cardSuit = "H";
    test.className = "card";
    test.style.backgroundImage = 'url("'+config.deckImage+'")';
    test.style.width= config.cardWidth+'px';
    test.style.height= config.cardHeight+'px';
    this.element.appendChild(test);
	}

	Deck.prototype.pop = function () {
    return "ok";
	};

	window.Deck = Deck;
})(window);
