# Chatty App

Chatty App allow users to communicate with each other without having to register accounts. It uses React, as well as modern tools for Node including Webpack and Babel.

## Behaviour

*When any connected user sends a chat message, all connected users receive and display the message.
*When any connected user changes their name, all connected users are notified of the name change.
*Notifications are styled differently from chat messages
*Header will display the count of connected users
*When the number of connected users changes, this count will be updated for all connected users.
*Different users names will each be colored differently

##Final Product

### Screenshot 3 users connected
!["Screenshot 3 users online"]

git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
