# Ceres (ElleHacks23)

Ceres is a food-sharing application that connects locals with restaurants & bakeries offering leftover packaged food at a subsidized price, sending text alerts to inform users about available deals.

## Inspiration
Ceres provides an innovative solution to addressing both food waste and food insecurity while also promoting a sense of community involvement in environmental and social issues. Over a third of all food produced (~2.5 billion tons) is lost or wasted each year. This number is even more striking, given the large number of hungry people in the world. We waste not only the food itself, but also the water and energy needed to grow, harvest, transport, and package it. Moreover, rotting food in landfills releases methane, an even more potent greenhouse gas than carbon dioxide. Food waste has a huge negative impact on the earth. 

## What it does
Ceres aims to reduce food waste and promote sustainability by diverting surplus food away from landfills and into the hands of those who need it. Towards the end of their operation hours, participating restaurants can update our database on surplus food for a discounted rate, through a webpage designed for them. Then, customers who have shown interest in said restaurant in the application would receive a text notification giving them a gist of the available deals on products. The customers can then get on our web app for further details. The platform supports local businesses by allowing them to reach a wider audience and generate additional revenue from their surplus food.

## How we built it
Central to Ceres is a Firebase Realtime Database into which restaurants store data about subsidized products, and from which customer webpages access said data. The transmission of notifications from the database to the users is made possible by Autocode's Connecter API. Our frontend was built by using JavaScript, HTML, and CSS, and prototyping was done on Figma.

## Challenges we ran into
We'd never worked with Firebase or Autocode before, which was the crux of our project. Figuring out how to use them was definitely hard, yet rewarding.

## Accomplishments that we're proud of
Ceres could inspire a culture of sustainability by encouraging individuals to consider the impact of their food choices and promoting a sense of community involvement in environmental issues. We're also proud of successfully integrating tech stacks in our project which we didn't have much experience on. 

## What we learned
We learnt how much work actually goes into creating a web development application! We also learnt to use and integrate Autocode and Firebase. 

## What's next for Ceres
Incorporate food delivery options into the Ceres application, as well as include food from supermarkets and grocery stores, rather than just restaurants.
