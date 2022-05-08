# testapp

TestApp is a Service Platform Test Task for Clojure Developer.

## Installation

Use `git clone` to clone this repo.

## Usage
    $ lein run
or 

    $ lein uberjar
    $ java -jar testapp-0.1.0-SNAPSHOT-standalone.jar

App will be started on http://localhost:8080/testapp

## Description
This app consists of two part - frontend and backend.
Frontend created with using ClojureScript, Reagent and Re-Frame.
Frontend gives an interface for read and create new orders. Orders storaged on backend. 

Connection with backend relised throught HTTP and RESTful API.

Backend created with using Clojure, Compojure (as a router) and web-server Jetty.
Realised two endpoints:
>GET "/api/order/list"

Return list of all orders from storage on JSON format.

Exampele:
```
[
    {
        "id": 0,
        "title": "Fix phone",
        "description": "Some trouble with phone. Fixed!",
        "customer": "Petya",
        "executor": "Ivan",
        "execution_date": "2022-05-10"
    },
    {
        "id": 1,
        "title": "Problem with AD",
        "description": "Some problem with AD. Check it.",
        "customer": "Tanya",
        "executor": "Ivan",
        "execution_date": "2022-04-12"
    }
]
```

>POST "/api/order" 

Create new oreder in database. Sample or request:

```
{
    "title": "New order",
    "description": "New description",
    "customer": "Soul GoodMan",
    "executor": "Ivan",
    "execution_date": "11-05-2022"
}```
