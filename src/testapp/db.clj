(ns testapp.db)

(def dataset {
              0 {:title "Fix phone" :description "Fix stupid phone!" :customer "Petya" :executor "Ivan" :execution_date "25-04-22"}
              1 {:title "Problem with AD":description "Some problem with AD. Check it." :customer "Tanya" :executor "Ivan" :execution_date "25-03-22"}
              2 {:title "Help me!!!" :description "Recall to customer and figure out wht happened" :customer "Masha" :executor "Ivan" :execution_date "22-04-22"}
              }
  )

(defn select-all 
  [] dataset
  )

(defn create-record
  [record]
  (def dataset
    (assoc dataset (count dataset) record)
    ))
