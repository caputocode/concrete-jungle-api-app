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
like to search for. A function to change the default marker once the input field has text inputted (by user) has been added so that for example 
cafes may show first.

Book section - the bottom of the web page displays a section where the user can register interest in a city break. EmailJS has been used so that
this functionality works and any submissions come through to an email address I can access. 


# Features Left to Implement

Another feature to consider implementing would be the ability for users to use a check box system so that multiple amenities can be seen
at the same time/filtered out. 


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
The search feature of the website was tested extensively by repetition when the website was run locally. This ensures the correct part of the world is shown on the map depending on the users Country choice.
The functionality to implement a working search for google maps was tested by checking radio buttons were tested manually to ensure that the correct markers are displayed when the correct input amenity is ticked.

Test emails were used using EmailJS to ensure working functionality. Emails were accessed by myself to ensure 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This project has been deployed on GitHub Pages and can be accessed <a href="https://caputocode.github.io/concrete-jungle-api-app/">here</a>.

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:


In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

I spent a while trying to enable the following functions.
Stack Overflow was extremely useful in helping with these problems. I also found Youtube videos....helpful 


## Content

Google Map/Places was used to provide JS code for the map. 

## Media
The photos used in this site were obtained from Unsplash and Pexel websites which provide free to use images. 

## Acknowledgements
I received inspiration for this project from X