(ns testapp.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [clojure.string :as str]
    ;;  [cljs-http.client :as http]
    ;;  [cljs.core.async :as async]
   [re-frame.core :as rf]
   [day8.re-frame.http-fx-alpha]))

(enable-console-print!)

;; CONST
(def HOSTNAME "http://localhost:8080")
(def NEW_POST_ENDPOINT (str HOSTNAME "/api/order"))
(def GET_POSTS_ENDPOINT (str HOSTNAME "/api/order/list"))
(def TIMEOUT 1000)

;; SPA State
(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:current-page :list-orders
    :form-state {}
    :orders []}))

(rf/reg-event-db
 :set-current-page
 (fn [db [_ new-page] _]
   (assoc db :current-page (keyword new-page))))

(rf/reg-event-db
 :set-value
 (fn [db [_ field value]]
   (assoc-in db [:form-state (keyword field)] value)))

(rf/reg-event-fx
 :request-orders
 (fn [_ _]
   {:http {:action :GET
           :url "http://localhost:8080/api/order/list"
           :path [:orders]}}))


(rf/reg-sub
 :orders
 (fn [db _]
   (db :orders)))

(rf/reg-sub
 :current-page
 (fn [db _]
   (db :current-page)))

(rf/reg-sub
 :value
 (fn [db [_ field]]
   (get-in db [:form-state field])))


;; Dataset
(defonce dataset (r/atom []))
;; current-page may be list or add
;; (defonce current-page (r/atom :list-orders))



;; ;; JSON Iteractions
;; (defn update-order-list []
;;   ;; Get actual orders throught API
;;   (async/go
;;     (let [response (async/<! (http/get GET_POSTS_ENDPOINT))]
;;       (reset! dataset (js->clj (response :body))))))

;; (defn send-new-order [order]
;;   ;; Send new order to backend
;;   (http/post NEW_POST_ENDPOINT {:json-params order}))


;; Elements of page
(defn order-item
  [order]
  ^{:key (:id order)}
  [:div.order-item
   [:div.order-item_title
    [:span (str "Date: " (:execution_date order))]
    [:span (str "Customer: " (:customer order))]
    [:span (str "Executor: " (:executor order))]]
   [:div.order-item_body
    [:p (str "Title: " (:title order))]
    [:p (str "Description: " (:description order))]]])

;; Forms
(defonce form-values (r/atom {}))

(defn input-field
  [name]
  (let [field (keyword (str/lower-case name))]
    [:div
     [:label name
      [:input {:type "text" :placeholder name :id name :name name
               :value @(rf/subscribe [:value field])
               :on-change #(rf/dispatch [:set-value field (-> % .-target .-value)])}]]]))

(defn text-field
  [name]
  (let [field (keyword (str/lower-case name))]
    [:div
     [:label name
      [:textarea {:type "text" :placeholder name :id name :name name
                  :value @(rf/subscribe [:value field])
                  :on-change #(rf/dispatch [:set-value field (-> % .-target .-value)])}]]]))

(defn date-field
  [name]
  (let [field (keyword (str/lower-case name))]
    [:div
     [:label name
      [:input {:type "date" :placeholder name :id name :name name
               :value @(rf/subscribe [:value field])
               :on-change #(rf/dispatch [:set-value field (-> % .-target .-value)])}]]]))

(defn validate-form [values]
  ;; Once I'll make form validator
  )

;; Page sections
(defn header []
  [:header
   [:nav.menu
    [:ul.menu_items
    ;;  TODO make button component
     [:li [:a.menu_item {:class (when (=  @(rf/subscribe [:current-page]) :add-order) "meni_item--selected")
                         :on-click #(rf/dispatch [:set-current-page :add-order])}
           "Add order"]]
     [:li [:a.menu_item {:class (when (=  @(rf/subscribe [:current-page]) :list-orders) "meni_item--selected")
                         :on-click #(rf/dispatch [:set-current-page :list-orders])}
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
   [:button {:on-click (fn [e] (do (.preventDefault e)
                                   (rf/dispatch [:add-order])
                                ;;  (validate-form @form-values)
                                ;;  (send-new-order @form-values)
                                ;;  (reset! form-values {})
                                ;;  (rf/dispatch [:set-current-page :list-orders])
                                   ))}
    "Add"]])

(defn order-list-page []
  (for [order (reverse @(rf/subscribe [:orders]))]
    (order-item order)))

;; Entry Point

(defn main []
  [:main
   (case @(rf/subscribe [:current-page])
    ;; @current-page
     :list-orders (order-list-page)
     :add-order (add-form-page))])

(rf/dispatch-sync [:initialize])
(defn index []
  ;; (js/setInterval (fn [] (rf/dispatch [:orders])) TIMEOUT)
  (rf/dispatch [:request-orders])
  [:main
   [header]
   [main]
   [footer]])


(rdom/render [index] (js/document.getElementById "app"))

(defn on-js-reload []
;;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
