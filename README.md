## Setting up mongodb 
1. install docker desktop
2. run ```docker --version``` to check if it works
3. run ```docker run -d -p 27017:27017 mongo``` to start a mongo instance locally

## Connect to the mongo instance and add some sample data
```
//sample data schema
{
    "title":"this is a title",
    "desc":"this is some desc",
    "ans":"this is ans"
}
```

## run the backend 
