$(function() {


  $.getJSON('https://mtgjson.com/json/KLD.json', function(kaladesh) {
    var cards = kaladesh.cards
		console.log(cards)
		var $cardsList = $('ul')
    var cardColor = "Red"
    var character = "Creature"

		$cardsList.empty()
		for(var i = 0; i < cards.length; i++) {
			if(cards[i].colors == cardColor && cards[i].type.indexOf(character) >= 0) {
				$cardsList.append(addCard(cards[i].multiverseid, cards[i].type, cards[i].colors))
			}
		}
		carousel()
  })

	function addCard(img, type, color) {
		var cardImage = $('<img />', {
			src: "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid="+img
		})
		var $card = $('<li />', {
			html: cardImage
		})
		return $card
	}

	function carousel() {

      var slidesLenght = $('li:nth-child(3n+1)').length

      var actualPosition = 0

			var $leftButton = $('.left-cursor')
			var $rightButton = $('.right-cursor')
			var $overflowContent = $('.container')

			$rightButton.on('click', function(){

        var widthSlide = $('li').width()
        var contentWidth = (slidesLenght-5)*(widthSlide)

				console.log(actualPosition)
				if (actualPosition>=contentWidth) return

				actualPosition+=widthSlide
				$overflowContent.animate({scrollLeft: actualPosition}, 400)
			})

			$leftButton.on('click', function(){

        var widthSlide = $('li').width()
        var contentWidth = (slidesLenght-5)*(widthSlide)

				console.log(actualPosition)
				if (actualPosition == 0) return

				actualPosition-=widthSlide
				$overflowContent.animate({scrollLeft: actualPosition}, 400)
			})
	}






})
