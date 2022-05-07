(ns testapp.routes
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.route :refer [not-found resources]]
            [testapp.handlers :as handlers]))

(defroutes app
  (GET "/" request (handlers/home request))
  (GET "/testapp" request (handlers/index request))
  (GET "/order/list" request (handlers/list-order request))
  (POST "/order" request (handlers/new-order request))

  ;; (GET "/order/:id" [id :as request] (api/get-order request))
  ;; (PUT "/order/:id" [id :as request] (api/edit-order request))
  ;; (DELETE "/order/:id" [id :as request] (api/delete-order request))
  (resources "/")
  (not-found "Page not found"))
