# Microfrontend with multiple template DEMO

To start, first nun `npm install` for **each** project

Then open terminal in each project and run:
```
npm start
```

Finally, access the app shell at `http://localhost:4200` to see result

Note: microfrontends run in the following address:
- Vue: localhost:3000
- Angular: localhost:3001
- React: localhost:3002
- App-Shell: localhost:4200

login: 
- user1-user1 => view 1 service
- user2-user2 => view 2 service
- user3-user3 => view 3 service


run proj react with NGINX:
Pull image NGINX from docker hub
run yarn build project
start nginx server
run: docker run -p 80:80 -v /path/to/your/project/nginx.conf:/etc/nginx/nginx.conf -v /path/to/your/react/app/build:/usr/share/nginx/html nginx
