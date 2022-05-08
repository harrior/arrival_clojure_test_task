(ns testapp.core
    (:require
     [reagent.core :as r]
     [reagent.dom :as rdom]
     [clojure.string :as str]
     [cljs-http.client :as http]
     [cljs.core.async :as async]))

(enable-console-print!)

;; CONST
(def NEW_POST_ENDPOINT "http://localhost:8080/api/order")
(def GET_POSTS_ENDPOINT "http://localhost:8080/api/order/list")
(def TIMEOUT 1000)

;; SPA State
;; Dataset
(defonce dataset (r/atom []))
;; current-page may be list or add
(defonce current-page (r/atom "list"))


;; JSON Iteractions
(defn update-order-list []
  ;; Get actual orders throught API
  (async/go
    (let [response (async/<! (http/get GET_POSTS_ENDPOINT))]
      (reset! dataset (js->clj (response :body)))
      (js/console.log (@dataset)))))

(defn send-new-order [order]
  ;; Send new order to backend
  (http/post NEW_POST_ENDPOINT {:json-params order}))


;; Elements of page
(defn order-item
  [order]
  [:div.order-item
   [:div.order-item_title
    [:spin (str "Date: " (:execution_date order))]
    [:spin (str "Customer: " (:customer order))]
    [:spin (str "Executor: " (:executor order))]]
   [:div.order-item_body
    [:p (str "Title: " (:title order))]
    [:p (str "Description: " (:description order))]]])

;; Forms
(defonce form-values (r/atom {}))

(defn input-field
  [name]
  (let [key (keyword (str/lower-case name))]
    [:div
     [:label name
      [:input {:type "text" :placeholder name :id name :name name
               :value (@form-values key)
               :on-change #(swap! form-values (fn [] (assoc @form-values key (-> % .-target .-value))))}]]]))

(defn text-field
  [name]
  (let [key (keyword (str/lower-case name))]
    [:div
     [:label name
      [:textarea {:type "text" :placeholder name :id name :name name
                  :value (@form-values key)
                  :on-change #(swap! form-values (fn [] (assoc @form-values key (-> % .-target .-value))))}]]]))

(defn date-field
  [name]
  (let [key (keyword (str/lower-case name))]
    [:div
     [:label name
      [:input {:type "date" :placeholder name :id name :name name
               :value (@form-values key)
               :on-change #(swap! form-values (fn [] (assoc @form-values key (-> % .-target .-value))))}]]]))

(defn validate-form [values]
  ;; Once I'll make form validator
  )

;; Page sections
(defn header []
  [:header 
   [:nav.menu
    [:ul.menu_items
    ;;  TODO make button component
     [:li [:a.menu_item {
               :class (when (= @current-page "add") "meni_item--selected")
               :on-click #(reset! current-page "add")}
           "Add order"]]
     [:li [:a.menu_item {
                         :class (when (= @current-page "list") "meni_item--selected")
                         :on-click #(reset! current-page "list")}
           "Order list"]]]]])

(defn footer []
  [:footer "Test Task for Arrival (c) Sizov Sergey 2022"])





;; Pages

(defn add-form-page []
  [:form.order-form
    (input-field "Customer")
    (input-field "Executor")
    (input-field "Title")
    (text-field "Description")
    (date-field "Execution_Date")
    [:button {:on-click (fn[e]((do
                                 (.preventDefault e)
                                 (validate-form @form-values)
                                 (send-new-order @form-values)
                                 (reset! form-values {})
                                 (reset! current-page "list")
                                 )))}
     "Add"]
    ])

(defn order-list-page []
  (for [order (reverse @dataset)]
    (order-item order)))


  
;; Entry Point
(defn main []
  [:main
   (case @current-page
     "list" (order-list-page)
     "add" (add-form-page))])

(defn index []
  (js/setInterval (fn [] (update-order-list)) TIMEOUT)
  [:main
   [header]
   [main]
   [footer]]
  )

(rdom/render [index] (js/document.getElementById "app"))

(defn on-js-reload []
;;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
