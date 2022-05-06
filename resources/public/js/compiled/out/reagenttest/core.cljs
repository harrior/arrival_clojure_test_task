(ns reagenttest.core
    (:require
     [reagent.core :as r]
     [reagent.dom :as rdom]
     [clojure.string :as str]))

(enable-console-print!)

;; current-page may be list or add
(defonce current-page (r/atom "list")) 

;; Dataset
(defonce dataset (r/atom [{:id 0 :title "Fix phone" :description "Fix stupid phone!" :customer "Petya" :executor "Ivan" :execution_date "25-04-22"}
              {:id 1 :title "Problem with AD" :description "Some problem with AD. Check it." :customer "Tanya" :executor "Ivan" :execution_date "25-03-22"}
              {:id 2 :title "Help me!!!" :description "Recall to customer and figure out wht happened" :customer "Masha" :executor "Ivan" :execution_date "22-04-22"}]))


;; Pages' components
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
  ;; Once I'll make data validator
  (println values)
  values)

(defn send-date [values]
  (swap! dataset #(conj @dataset (assoc values :id (count @dataset))))
  )

;; Pages

(defn add-form []
  [:form.order-form
    (input-field "Customer")
    (input-field "Executor")
    (input-field "Title")
    (text-field "Description")
    (date-field "Execution_Date")
    [:button {:on-click (fn[e]((do
                                 (.preventDefault e)
                                 (validate-form @form-values)
                                 (send-date @form-values)
                                 (reset! form-values {})
                                 (reset! current-page "list"))))}
     "Add"]
    ])

(defn order-list []
  (for [order (reverse @dataset)]
    (order-item order)))

;; Entry Point
(defn main []
  [:main
   (case @current-page
     "list" (order-list)
     "add" (add-form))])

(defn index []
  [:main
   [header]
   [main]
   [footer]])

(rdom/render [index] (js/document.getElementById "app"))

;; (defn on-js-reload []
;;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
;; )
