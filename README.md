# Django Rest Svelte Todo  App

A. Get Started

1. git clone git@github.com:glanzel/django-svelte-todo.git
2. python3 -m pip install poetry
3. DEV=ON poetry run python3 manage.py runserver
4. Open Your Bowser and type "localhost:8000"


B. Develop / Work with the Code

1. cd frontend
2. npx vite build --watch  //to automaticly rebuid the Svelte code wich gets delivered from Django


C. Explanation

Structure
backend    		//django project folder 
backend/spa  	//Django app which delivers the svelte code
todo					//django code wich provides the api
frontend    	//svelte Code


The Svelte Part (inside frontend), provides its static Files into /backend/spa/templates by calling npx vite build. (see vite.config.js)
The Django spa app part is configured to use the index.html as its startingpoint (spa/views.py), and django has an extra template folder in spa/templates/assets und uses assets as its static url (setting.py) 

