# Byte-Bite
#### Your Digital Tastemaker


Byte-Bite is a Web Based Online Food Review Platform which focuses to cater the "FOOD" needs of IIT Guwahati Campus Junta.


#### Some Features:
Rate and Post Review of Food Items/ Dishes of in and around IIT Campus Stalls.

Like a review you like.

Reply to a comment.

Sort dishes/food items based on various factors.


#### Libraries/Frameworks/Stylings Used:

1.Django(Python)

2.HTML

3.CSS

4.JS




#### Pre-requisites:
1.You must be a member of IIT Guwahati i.e. must have an @iitg.ac.in account.

2.Python must be installed in your machine, since all this project is based on Python framework.




#### Installation:

After extracting the .zip file, a folder named ByteBite will be created. Open that folder in the terminal. Once you are in that folder in terminal, type following commonds.
If you are on base environment,type:

```
conda deactivate
cd ..
pip install virtualenv
```

This will install your virtual environment. Now create a virtual environment with the name 'env'.
```
virtualenv env
```

Get back into the Project folder:
```
cd ByteBite
```

Now to install requirements for this project, type the following command:
```
pip install -r requirements.txt
```
Now that all required libraries and framweworks are installed, type these final lines of command to execute the website:
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
This will host the site on your local port(default:8000).

To access the website, and on url section, type:

### localhost:8000/reviewapp

This will open the website.


### Developers: (IIT Guwahati)

Priyansh Awasthi

Raunit Patel

Prakhar Punj

### Guided by:
- Prof. Teena Sharma
- Python Programming Lab
