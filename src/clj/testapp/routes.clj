(ns testapp.routes
  (:require [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [not-found resources]]
            [testapp.handlers :as handlers]))

(defroutes app
  (GET "/" [] handlers/home)
  (GET "/testapp" [] handlers/index)
  (GET "/api/order/list" [] handlers/list-order)
  (POST "/api/order" request (handlers/new-order request))
  (resources "/")
  (not-found "Page not found"))
