(ns testapp.routes
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.route :refer [not-found]]
            [testapp.api :as api]))

(defroutes app
  (GET "/" request (api/home request))
  (GET "/testapp" request (api/testapp request))
  (GET "/order/list" request (api/list-order))

  (POST "/order" request (api/new-order request))
  ;; (GET "/order/:id" [id :as request] (api/get-order request))
  ;; (PUT "/order/:id" [id :as request] (api/edit-order request))
  ;; (DELETE "/order/:id" [id :as request] (api/delete-order request))

  (not-found "Page not found"))
