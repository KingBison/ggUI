import clubs2 from "./card-assets/2_of_clubs.png";
import clubs3 from "./card-assets/3_of_clubs.png";
import clubs4 from "./card-assets/4_of_clubs.png";
import clubs5 from "./card-assets/5_of_clubs.png";
import clubs6 from "./card-assets/6_of_clubs.png";
import clubs7 from "./card-assets/7_of_clubs.png";
import clubs8 from "./card-assets/8_of_clubs.png";
import clubs9 from "./card-assets/9_of_clubs.png";
import clubs10 from "./card-assets/10_of_clubs.png";
import clubsJ from "./card-assets/jack_of_clubs.png";
import clubsQ from "./card-assets/queen_of_clubs.png";
import clubsK from "./card-assets/king_of_clubs.png";
import clubsA from "./card-assets/ace_of_clubs.png";
import diamonds2 from "./card-assets/2_of_diamonds.png";
import diamonds3 from "./card-assets/3_of_diamonds.png";
import diamonds4 from "./card-assets/4_of_diamonds.png";
import diamonds5 from "./card-assets/5_of_diamonds.png";
import diamonds6 from "./card-assets/6_of_diamonds.png";
import diamonds7 from "./card-assets/7_of_diamonds.png";
import diamonds8 from "./card-assets/8_of_diamonds.png";
import diamonds9 from "./card-assets/9_of_diamonds.png";
import diamonds10 from "./card-assets/10_of_diamonds.png";
import diamondsJ from "./card-assets/jack_of_diamonds.png";
import diamondsQ from "./card-assets/queen_of_diamonds.png";
import diamondsK from "./card-assets/king_of_diamonds.png";
import diamondsA from "./card-assets/ace_of_diamonds.png";
import hearts2 from "./card-assets/2_of_hearts.png";
import hearts3 from "./card-assets/3_of_hearts.png";
import hearts4 from "./card-assets/4_of_hearts.png";
import hearts5 from "./card-assets/5_of_hearts.png";
import hearts6 from "./card-assets/6_of_hearts.png";
import hearts7 from "./card-assets/7_of_hearts.png";
import hearts8 from "./card-assets/8_of_hearts.png";
import hearts9 from "./card-assets/9_of_hearts.png";
import hearts10 from "./card-assets/10_of_hearts.png";
import heartsJ from "./card-assets/jack_of_hearts.png";
import heartsQ from "./card-assets/queen_of_hearts.png";
import heartsK from "./card-assets/king_of_hearts.png";
import heartsA from "./card-assets/ace_of_hearts.png";
import spades2 from "./card-assets/2_of_spades.png";
import spades3 from "./card-assets/3_of_spades.png";
import spades4 from "./card-assets/4_of_spades.png";
import spades5 from "./card-assets/5_of_spades.png";
import spades6 from "./card-assets/6_of_spades.png";
import spades7 from "./card-assets/7_of_spades.png";
import spades8 from "./card-assets/8_of_spades.png";
import spades9 from "./card-assets/9_of_spades.png";
import spades10 from "./card-assets/10_of_spades.png";
import spadesJ from "./card-assets/jack_of_spades.png";
import spadesQ from "./card-assets/queen_of_spades.png";
import spadesK from "./card-assets/king_of_spades.png";
import spadesA from "./card-assets/ace_of_spades.png";
import joker from "./card-assets/black_joker.png";
import back from "./card-assets/back.png"
import blank from "./card-assets/blank.png"

export const getCardGraphic = (suit, number, visible) => {
    if(!visible){
        return back
    }

    if (!suit || !number){
        return blank
    }

    if (suit === "clubs" && number === "two") {
        return clubs2
    }
    if (suit === "clubs" && number === "three") {
        return clubs3
    }
    if (suit === "clubs" && number === "four") {
        return clubs4
    }
    if (suit === "clubs" && number === "five") {
        return clubs5
    }
    if (suit === "clubs" && number === "six") {
        return clubs6
    }
    if (suit === "clubs" && number === "seven") {
        return clubs7
    }
    if (suit === "clubs" && number === "eight") {
        return clubs8
    }
    if (suit === "clubs" && number === "nine") {
        return clubs9
    }
    if (suit === "clubs" && number === "ten") {
        return clubs10
    }
    if (suit === "clubs" && number === "jack") {
        return clubsJ
    }
    if (suit === "clubs" && number === "queen") {
        return clubsQ
    }
    if (suit === "clubs" && number === "king") {
        return clubsK
    }
    if (suit === "clubs" && number === "ace") {
        return clubsA
    }
    if (suit === "diamonds" && number === "two") {
        return diamonds2
    }
    if (suit === "diamonds" && number === "three") {
        return diamonds3
    }
    if (suit === "diamonds" && number === "four") {
        return diamonds4
    }
    if (suit === "diamonds" && number === "five") {
        return diamonds5
    }
    if (suit === "diamonds" && number === "six") {
        return diamonds6
    }
    if (suit === "diamonds" && number === "seven") {
        return diamonds7
    }
    if (suit === "diamonds" && number === "eight") {
        return diamonds8
    }
    if (suit === "diamonds" && number === "nine") {
        return diamonds9
    }
    if (suit === "diamonds" && number === "ten") {
        return diamonds10
    }
    if (suit === "diamonds" && number === "jack") {
        return diamondsJ
    }
    if (suit === "diamonds" && number === "queen") {
        return diamondsQ
    }
    if (suit === "diamonds" && number === "king") {
        return diamondsK
    }
    if (suit === "diamonds" && number === "ace") {
        return diamondsA
    }
    if (suit === "hearts" && number === "two") {
        return hearts2
    }
    if (suit === "hearts" && number === "three") {
        return hearts3
    }
    if (suit === "hearts" && number === "four") {
        return hearts4
    }
    if (suit === "hearts" && number === "five") {
        return hearts5
    }
    if (suit === "hearts" && number === "six") {
        return hearts6
    }
    if (suit === "hearts" && number === "seven") {
        return hearts7
    }
    if (suit === "hearts" && number === "eight") {
        return hearts8
    }
    if (suit === "hearts" && number === "nine") {
        return hearts9
    }
    if (suit === "hearts" && number === "ten") {
        return hearts10
    }
    if (suit === "hearts" && number === "jack") {
        return heartsJ
    }
    if (suit === "hearts" && number === "queen") {
        return heartsQ
    }
    if (suit === "hearts" && number === "king") {
        return heartsK
    }
    if (suit === "hearts" && number === "ace") {
        return heartsA
    }
    if (suit === "spades" && number === "two") {
        return spades2
    }
    if (suit === "spades" && number === "three") {
        return spades3
    }
    if (suit === "spades" && number === "four") {
        return spades4
    }
    if (suit === "spades" && number === "five") {
        return spades5
    }
    if (suit === "spades" && number === "six") {
        return spades6
    }
    if (suit === "spades" && number === "seven") {
        return spades7
    }
    if (suit === "spades" && number === "eight") {
        return spades8
    }
    if (suit === "spades" && number === "nine") {
        return spades9
    }
    if (suit === "spades" && number === "ten") {
        return spades10
    }
    if (suit === "spades" && number === "jack") {
        return spadesJ
    }
    if (suit === "spades" && number === "queen") {
        return spadesQ
    }
    if (suit === "spades" && number === "king") {
        return spadesK
    }
    if (suit === "spades" && number === "ace") {
        return spadesA
    }
    if (suit === "joker" && number === "joker") {
        return joker
    }
}



