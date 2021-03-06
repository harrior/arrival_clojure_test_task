(ns testapp.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [clojure.string :as str]
   [ajax.core :as ajax]
   [re-frame.core :as rf]
   [day8.re-frame.http-fx]))

(enable-console-print!)

;; CONST
(def HOSTNAME "http://localhost:8080")
(def NEW_POST_ENDPOINT (str HOSTNAME "/api/order"))
(def GET_POSTS_ENDPOINT (str HOSTNAME "/api/order/list"))

;;  Events
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
 :clean-form
 (fn [db _]
   (assoc db :form-state {})))

(rf/reg-event-db
 :set-value
 (fn [db [_ field value]]
   (assoc-in db [:form-state (keyword field)] value)))

(rf/reg-event-db
 :good-http-result
 (fn [db [_ orders]]
   (assoc db :orders orders)))

(rf/reg-event-db :bad-http-result (fn [_ _]))

(rf/reg-event-fx
 :request-orders
 (fn [{:keys [db]} _]
   {:db   (assoc db :show-twirly true)
    :http-xhrio {:method          :get
                 :uri             GET_POSTS_ENDPOINT
                 :timeout         8000                                          
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:good-http-result]
                 :on-failure      [:bad-http-result]}}))

(rf/reg-event-db 
 :success-post-result 
 (fn [_ _]
   (rf/dispatch [:request-orders])))

(rf/reg-event-db :failure-post-result (fn [_ _]))

(rf/reg-event-fx
 :add-order
 (fn [db _]
    {:http-xhrio {:method          :post
                  :uri             NEW_POST_ENDPOINT
                  :params          (get-in db [:db :form-state])
                  :timeout         5000
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:success-post-result]
                  :on-failure      [:failure-post-result]}}))
;; Subscribes
(rf/reg-sub
 :orders
 (fn [db _]
   (db :orders))
 )

(rf/reg-sub
 :current-page
 (fn [db _]
   (db :current-page)))

(rf/reg-sub
 :value
 (fn [db [_ field]]
   (get-in db [:form-state field])))


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

;; Page sections
(defn header []
  [:header
   [:nav.menu
    [:ul.menu_items
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
                                   (rf/dispatch [:clean-form])
                                   (rf/dispatch [:set-current-page :list-orders])
                                   ))}
    "Add"]])

(defn order-list-page []
  (for [order (reverse @(rf/subscribe [:orders]))]
    (order-item order)))

(defn main []
  [:main
   (case @(rf/subscribe [:current-page])
     :list-orders (order-list-page)
     :add-order (add-form-page))])

;; Entry Point

(defn index []
  (rf/dispatch [:request-orders])
  [:main
   [header]
   [main]
   [footer]])

(rf/dispatch-sync [:initialize])
(rdom/render [index] (js/document.getElementById "app"))

(defn on-js-reload []
;;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
