(defproject testapp "0.1.0-SNAPSHOT"
  :description "Arrival Test Task by Sizov Sergey"
  :min-lein-version "2.9.1"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [ring/ring-core "1.9.5"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [compojure "1.6.2"]
                 [org.clojure/data.json "2.4.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async  "0.4.500"]
                 [reagent "0.10.0"]]
  
  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "testapp.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main testapp.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/testapp.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/testapp.js"
                           :main testapp.core
                           :optimizations :advanced
                           :pretty-print false}}]}

    :figwheel {:css-dirs ["resources/public/css"] ;; watch and update CSS
               }
  
  :main ^:skip-aot testapp.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                      ;;  :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
                       }
             :dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
