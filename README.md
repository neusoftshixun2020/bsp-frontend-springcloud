The Bsp frontend is divided into four laysers.

1.	 Network Layer

The network layer provides functionalities for the frontend project to communicate with the backend project. And it was divided into two sections:

A packaged Axios object, whose base URL and interceptors were defined, was used to make to send and receive HTTP request from the backend server;

2.	Utils 

The util layer includes configuration for the projects, some external libraries, plugins and util functions. 

3.	Vue SPA

This is the core of the frontend projects. Vue Components defines the content, style and main behavior of the webpages. Vue Router defines the routing rules of the Single-page Application. And Vuex provides functionality for centralized state management. We also use the ElementUI library to utilize the UI styles in each page.

4.	Browser

The web browser will get normal HTML/JavaScript/CSS files;

