(defproject testapp "0.1.0-SNAPSHOT"
  :description "Arrival Test Task by Sizov Sergey"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [ring/ring-core "1.9.5"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [compojure "1.6.2"]
                 [org.clojure/data.json "2.4.0"]]
  :main ^:skip-aot testapp.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                      ;;  :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
                       }})
