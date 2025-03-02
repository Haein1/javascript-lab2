/*
Summary
Setting up fetch request:

You have created an object xhr to get data to define where the data is present.

You asked for data using xhr.open('GET', url, true); to prepare to receive data in a specific format (xhr.responseType = 'json';).

Using the received data:

You created the function xhr.onload = function() { ... } to retrieve specific information like articles, and decided where to show them on the webpage using document.getElementById('articles').
Putting it all together:

For each article, you created webpage parts like title descriptions and filled them with data.

You then fetched these parts on the webpage and sent the request to get the data xhr.send();.


*/
var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
/*
'GET': Specifies the HTTP method used for the request (in this case, a GET request).
URL: Represents the URL from where you will fetch the data.
True: Indicates if the request is asynchronous (true) or synchronous (false). In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.
*/

xhr.responseType = 'json';
/*
 inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
*/

debugger;
//You need to define what should happen when the data is successfully loaded using xhr.onload = function() { ... } function.
xhr.onload = function(){
    //to retrieve the articles array from the JSON response.
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    // iterate health data to fetch on the front page using loops.
    articles.forEach(function(article) {
        //Create HTML elements dynamically ,Populate these HTML elements with corresponding content from the fetched JSON data ,Attach these elements to the articlesDiv to display each article's details on the webpage 
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });


}

// send the XMLHttpRequest to fetch the data from the specified URL 
xhr.send();
