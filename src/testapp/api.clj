(ns testapp.api
  (:require [ring.util.response :as response]
            [clojure.data.json :as json]
            [testapp.db :as db])
  )


(defn home
  [request]
  (ring.util.response/redirect "http://localhost:8080/testapp"))

(defn testapp
  [request]
  {:status 200
   :headers {}
   :body "This route is for React frontend"})

(defn list-order
  []
  {
   :status 200
   :headers {"content-type" "application/json"}
   :body (json/write-str (db/select-all))})

(defn new-order
  [request]
  (let [body (slurp (request :body))]
    (db/create-record (json/read-str body))

    {:status 200
     :headers {"content-type" "application/json"}
     :body (json/write-str ())})
  )

