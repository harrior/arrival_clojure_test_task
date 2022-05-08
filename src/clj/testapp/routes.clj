(ns testapp.routes
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.route :refer [not-found resources]]
            [testapp.handlers :as handlers]))

(defroutes app
  (GET "/" [] handlers/home)
  (GET "/testapp" [] handlers/index)
  (GET "/api/order/list" [] handlers/list-order)
  (POST "/api/order" request (handlers/new-order request))

  ;; (GET "/api/order/:id" [id :as request] (api/get-order request))
  ;; (PUT "/api/order/:id" [id :as request] (api/edit-order request))
  ;; (DELETE "/api/order/:id" [id :as request] (api/delete-order request))
  (resources "/")
  (not-found "Page not found"))
