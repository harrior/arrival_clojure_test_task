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
This application consists of two parts - frontend and backend.
The frontend is built using ClojureScript, Reagent and Re-Frame.
Frontend provides an interface for reading and creating new orders. Orders are stored on the server.

Connection with backend released through HTTP and RESTful API.

Backend created with using Clojure, Compojure (as a router) and web-server Jetty.
Realised two endpoints:
>GET "/api/order/list"

Return a list of all orders from storage on JSON format.

Examples:
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

Create new order in database. Sample request:

```
{
    "title": "New order",
    "description": "New description",
    "customer": "Soul GoodMan",
    "executor": "Ivan",
    "execution_date": "11-05-2022"
}```
