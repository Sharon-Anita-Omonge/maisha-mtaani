import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

const getAccessToken = async () => {
	const url =
		"https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
	const auth =
		"Basic " +
		Buffer.from(
			`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
		).toString("base64");

	const response = await axios.get(url, {
		headers: {
			Authorization: auth,
		},
	});

	return response.data.access_token;
};

app.post("/stkpush", async (req, res) => {
	const { phoneNumber, amount } = req.body;
	const accessToken = await getAccessToken();
	const timestamp = new Date()
		.toISOString()
		.replace(/[^0-9]/g, "")
		.slice(0, -3);
	const password = Buffer.from(
		`${process.env.SHORTCODE}${process.env.PASSKEY}${timestamp}`
	).toString("base64");

	const stkPushData = {
		BusinessShortCode: process.env.SHORTCODE,
		Password: password,
		Timestamp: timestamp,
		TransactionType: "CustomerPayBillOnline",
		Amount: amount,
		PartyA: phoneNumber,
		PartyB: process.env.SHORTCODE,
		PhoneNumber: phoneNumber,
		CallBackURL: "https://your-callback-url.com/callback",
		AccountReference: "Donation",
		TransactionDesc: "Donation Payment",
	};

	try {
		const response = await axios.post(
			"https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
			stkPushData,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		res.json(response.data);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
