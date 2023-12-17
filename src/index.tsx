import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";
import { App } from "@/App";
import reportWebVitals from "@/reportWebVitals";
import { ApolloMultiClientProvider } from "@/Provider/ApolloMultiClientProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ApolloMultiClientProvider>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</ApolloMultiClientProvider>
);

reportWebVitals();
