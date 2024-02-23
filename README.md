## Overview

An interactive widget of Frank Karsten's formula for calculating how many lands you need in your deck. It supports multiple formats through small adjustments to each formula based on the particular details of each format, such as minimum deck size, presence of sideboard, mulligans, etc.

This widget was created as an interactive supplement to an article I wrote on how to build manabases in singleton formats, which you can read [here](https://www.canadianhighlander.ca/2023/07/17/how-to-build-a-manabase-for-singleton-formats/).


## Usage

After selecting a format from the dropdown, for each category simply enter the quantity or value contained within your deck, then hit "Calculate".


## Exact Formulas

#### Canlander, European Highlander and Gladiator

> Number of lands = 32.65 + (3.16 * avgmv) - (0.28 * (ramp + draw)) - fast - (0.74 * mdfc1) - (0.38 * mdfc2)

where:

- avgmv: the average mana value of your deck (total mana value / number of spells)
- ramp : nonland cards with mv<=2 that produce mana at some cost
- draw: nonland cards with mv<=2 that draw one or more cards
- fast : nonland cards that produce mana at no additional cost
- mdfc1: MDFCs that can enter untapped
- mdfc2: MDFCs that always enter tapped


#### Commander

> ((100 - commanders) / 60) * (19.59 + (1.90 * avgmv) + (0.27 * commanders)) - (0.28 * (ramp + draw)) - fast - (0.74 * mdfc1) - (0.38 * mdfc2) - 1.35


#### 7 Point Highlander, 60 card formats

> 19.59 + (1.90 * avgmv) - (0.28 * (ramp + draw)) - fast - (0.74 * mdfc1) - (0.38 * mdfc2) + (0.27 * companion)


## Glossary

**Average Mana Value**

Average mana value is calculated by adding the total mana value of all nonland cards, and dividing by the total number of nonland cards in the deck.

Although it is a simple concept, many cards have a "true" mana value that is more representative of what you actually pay to use them than their printed mana cost. For a detailed explanation, see [here](https://www.canadianhighlander.ca/2023/07/17/how-to-build-a-manabase-for-singleton-formats/#formula).


**Card Draw**

Defined as nonland cards with mana value two or less that draw a card or puts a card from your library into your hand. For permanents, the card must be drawn on cast, when the permanent enters the battlefield (Elvish Visionary), or by activating an ability with no additional restrictive costs (Conjurer’s Bauble). Don’t forget to count cards with cheap cycling costs.


**Ramp**

Karsten defines cheap ramp as nonland cards with mana value two or less that can produce mana either repeatedly (Birds of Paradise), in limited uses (Lotus Petal), or increase the amount of mana a land produces (Utopia Sprawl). It also includes cards that can put lands directly into play (Nature’s Lore), or cast spells or put permanents from your hand into play (Aether Vial).


**Fast Mana**

Fast mana is defined here as nonland cards that cost 0 and can repeatedly produce mana at no additional cost, with little to no restriction. Being essentially free, these cards can directly replace a land, and mostly comprise of artifacts such as the five moxen, Mana Crypt, and Chrome Mox.


**Untapped MDFCs** and **Tapped MDFCs**

These refer to Modal Double-Faced Cards (MDFCs). Those option to enter untapped, such as Emeria's Call, count as 0.74 lands in the formulas.

MDFCs that always enter tapped like Spikefield Hazard count as 0.38 lands.


**Companions** and **Commanders**

For formats with sideboards, companions add 0.27 to the required land count. Commanders are treated as similarly.

