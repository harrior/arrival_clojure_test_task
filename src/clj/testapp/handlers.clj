(ns testapp.handlers
  (:require [ring.util.response :as response]
            [clojure.data.json :as json]
            [testapp.db :as db]
            [hiccup.page :refer [html5 include-css include-js]]))

(defn home
  ;; Redirect to main page
  [request]
  (ring.util.response/redirect "http://localhost:8080/testapp"))

(defn index
  ;; Main page
  [request]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1"}]
    (include-css "/static/css/style.css")
    ]
   [:body {:class "body-container"}
    [:div#app
     [:h3 "ClojureScript has not been compiled!"]
     [:p "please run "
      [:b "lein figwheel"]
      " in order to start the compiler"]]
    (include-js "/static/js/testapp.js")
    ]))

(defn list-order
  ;; Get all orders list
  [request]
  {:status 200
   :headers {"content-type" "application/json"}
   :body (json/write-str (db/select-all))})

(defn new-order
  ;; Create new order 
  [request]
  (let [order (slurp (request :body))]
    (db/create-record (json/read-str order))
    {:status 200
     :headers {"content-type" "application/json"}
     :body (json/write-str order)}))
