(ns testapp.db)

(defonce dataset (atom [
              {:id 0 :title "Fix phone" :description "Some trouble with phone. Fixed!" :customer "Petya" :executor "Ivan" :execution_date "2022-05-10"}
              {:id 1 :title "Problem with AD":description "Some problem with AD. Check it." :customer "Tanya" :executor "Ivan" :execution_date "2022-04-12"}
              {:id 2 :title "Help me!!!" :description "Recall to customer and figure out wht happened" :customer "Masha" :executor "Ivan" :execution_date "2022-04-01"}
              ])
  )

(defn select-all 
  [] @dataset
  )

(defn create-record
  [record]
  ;; TODO make data vaidator/ convert string to keyword
  (reset! dataset (conj @dataset (assoc record :id (count @dataset))))
  )
