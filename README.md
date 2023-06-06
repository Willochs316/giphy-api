# Giphy API

The following article provides an in-depth explanation of this project:
[Creating GIFs with Giphy API and ReactJS: A Beginner's Guide](https://dev.to/willochs316/creating-gifs-with-giphy-api-and-reactjs-a-beginners-guide-42d0)

The Giphy API is a web-based service that provides developers with access to millions of GIFs from the Giphy library. The API allows users to search for GIFs by keyword, tag, or category and retrieve them in a variety of formats.

## Instructions

To begin working on the project, start by running `npm start` in your terminal. This will start the development server and the application will be accessible in your web browser at the specified port. From there, you can perform a search for a gif, the search query is executed and the corresponding gif data is retrieved. Clicking on the "Stickers" button returns the sticker data for the searched gif, while clicking on the "Gif" button retrieves the search value data. To navigate back to the home gif page, you can click on the Giphy logo. Happy coding!

## Getting Started

To get started with the Giphy API, you will need to sign up for a Giphy API key. Once you have your API key, you can make requests to the API using HTTP requests. The Giphy API supports both HTTP GET and POST requests.

## API Endpoints

The Giphy API provides several endpoints that allow you to retrieve GIFs based on different criteria:

+ `search`: Retrieves GIFs that match a search query.
+ `trending`: Retrieves trending GIFs.
+ `random`: Retrieves a random GIF.
+ `translate`: Translates a phrase into a GIF.

## Authentication

The Giphy API requires API key authentication for all requests. You can pass your API key as a query parameter in your API requests, or you can include it in the request headers. Make sure to keep your API key secret and do not share it publicly.

## Examples

Here is an example API request to retrieve the trending GIFs:

```
https://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY&limit=25&offset=0&rating=G&lang=en
```

This request returns a JSON response containing the data for the 25 most trending GIFs.

## Documentation
For more information on how to use the Giphy API, visit the [official Giphy API documentation](https://developers.giphy.com/docs/api/).

## Author
[Willochs Ojigbo](https://www.linkedin.com/in/willochs316/)
