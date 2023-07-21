import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { defineCustomElements } from "@ionic/pwa-elements/loader"
import { getInitialContext } from "@ionic/portals"

const container = document.getElementById("root")
const root = createRoot(container!)
defineCustomElements(window)

const context = getInitialContext()
console.log(context)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
