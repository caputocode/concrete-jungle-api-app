# Concrete Jungle City Break App

## Overview

This single page project has been designed for users looking for a travel website.
The Concrete Jungle City Break App is a ficticious web application providing city break inspiration through images and descriptions
and enables users to search for amenities within a range of cities using the Google maps/places API.


## UX

The project has been designed with simplicity and sleekness in mind. Users are able to navigate straight away
to their chosen section of the web page using the navbar. There is a fixed 'back to top' button to provide ease of navigation for the user.

As a user I want to be informed of the purpose of the site and so I designed the website with captivating title and image in order to entice the user. 
As a user I want a clear layout of the website providing easy navigation throughout the site. This was achieved with a linked navbar directing the user to different sections of the web app.
Inspiration for holidays is an important part of user experience. By the use of images and famous city quotes, I aimed to create a section describing and ultimately selling the idea of visiting exciting cities.
A major part of this project was the use of Google Maps/Places. As a user I want to be able to search for amenities in a particular city. I limited the country selection to USA, Netherlands, UK and France for this project.
This was in part due to an interest from myself, but also to be able to feature popular ciites such as Amsterdam, New York, Paris and London.
As a user I also want to be able to register interest in booking a city break. I enabled this function with the use of a form at the bottom of the app, linked up successfully with EmailJS.
There are social media icons evident in both the main page and the footer, which promotes the company across a range of platforms important in todays market.

Wireframes can be found in the wireframes folder.

## Features

About section - directs user to the About Us section where a description of the company is provided. Gives user an overview of what the website can provide.
There are (ficticious) links to social media in this section to promote the company.

Inspiration section - this section gives the user an opportunity for inspiration when considering which city to book. 
The section has been designed to captivate users and encourage excitement at the thought of booking a trip with Concrete Jungle. 
This has been achieved by the use of images and well known quotes.

Find a trip - In order for the user to be able to search for a city break, google maps/places has been implemented in order to 
provide users with the ability to search (in a restricted number of countries) for a desired city. Once the user has selected their chosen city 
the map successfully zooms in on the centre of the city and results in hotel markers. The user then has the option to change which amenity they would
like to search for. A function to change the default marker once the input field has text inputted (by user) has been added so that, for example 
cafes would show first.

Book section - the bottom of the web page displays a section where the user can register interest in a city break. EmailJS has been used so that
this functionality works and any submissions come through to an email address I can access. Javascript was used to clear the form upon successful 
submission, along with an alert to inform user information has been sent successfully. 


# Features Left to Implement

Another feature to consider implementing would be the ability for users to use a check box system with google maps so that multiple amenities can be seen
at the same time/filtered out with the use of different markers for each amenity.  


## Technologies Used

HTML - used to build the foundation of the website
CSS - used extensively to provide style and animation to the website. 
Bootstrap - to provide a responsive grid system layout.
Javascript - used to render Google map and in addition to provides functions to clear the markers, separate amenities such as hotel, cafe etc
JQuery - This was used in addition to the core JS provided by Google Maps. JQuery allowed me to ensure markers disappeared after user selects a new country for example.
Google Map/Places API platform
EmailJS - Used to link site with an email registered to myself which informs me of interest in the project (hypothetical city break enquiry)


## Testing

Testing of this website was carried out using Google chrome dev tools to ensure site was appropriate for all screen sizes.
To ensure navigation successful, click on each heading in the nav to make sure user is navigated to the correct part of the site.
The search feature in the map section of the website was tested extensively by repetition when the website was run locally. 
This ensures the correct part of the world is shown on the map depending on the users Country choice.
Autocomplete function was tested by entering text into input field. Dropdown menu successfully appears with appropriate cities within chosen country.
The functionality to implement a working search for google maps was tested by selecting radio buttons manually to ensure that the correct markers are displayed when the correct input amenity is ticked.

Javascript code was passed through JShint with no major issues.
Test emails were used using EmailJS to ensure working functionality for the booking form. Emails were accessed by myself to ensure succesful sending.
Required tags were added to ensure the user cannot submit form without relevant information. 



## Deployment

This project has been deployed on GitHub Pages and can be accessed <a href="https://caputocode.github.io/concrete-jungle-api-app/">here</a>.


## Credits

I spent a while trying to enable the following functions:
1. Clearing the markers after another country is selected.
2. Emptying the location field when a new country is selected.
3. Disabling the radio buttons if the input field is empty.
Stack Overflow was extremely useful in helping with these problems and provided me with the help I needed for the functions to work successfully.

I had inspiration for my booking form from codepen and the use of W3Schools website helped with re styling the radio buttons
on the google map section. 

I also thank my tutor Maranatha for his useful tips and review of the project. 


## Content

Google Map/Places was used to provide JS code for the map. 

## Media

The photos used in this site were obtained from Unsplash and Pexel websites which provide free to use images. 

## Acknowledgements

I received inspiration for this project from voyage prive and Lonely Planet websites. 