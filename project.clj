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
                 [reagent "0.10.0"]
                 [re-frame "1.3.0-rc3"]
                 [hiccup "1.0.5"]
                 [day8.re-frame/http-fx-alpha "0.0.2"]]

  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src/clj" "src/cljs"]

  :resource-paths ["resources"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]
                :figwheel {:on-jsload "testapp.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main testapp.core
                           :asset-path "static/js/out"
                           :output-to "resources/public/static/js/testapp.js"
                           :output-dir "resources/public/static/js/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/static/js/testapp.js"
                           :main testapp.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/static/css"] ;; watch and update CSS
             }

  :main ^:skip-aot testapp.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :dependencies [[binaryage/devtools "1.0.0"]
                                      [figwheel-sidecar "0.5.20"]]
                       :source-paths ["src/clj" "src/cljs"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :clean-targets ^{:protect false} ["resources/public/static/js"
                                                         :target-path]}
             :dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   :source-paths ["src/clj" "src/cljs"]
                   :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                   :clean-targets ^{:protect false} ["resources/public/static/js"
                                                     :target-path]}})
