import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Donate.css";
import rightarrow from "../../assets/rightchev.png";
import { Link } from "react-router-dom";

const DonatePage = () => {
	const [formData, setFormData] = useState({ name: "", email: "", amount: 5 });
	const [customAmount, setCustomAmount] = useState("");
	const [showCustomInput, setShowCustomInput] = useState(false);
	const [showOptions, setShowOptions] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleAmountChange = (amount) => {
		setFormData({ ...formData, amount });
		setCustomAmount("");
		setShowCustomInput(false);
	};

	const handleCustomAmountChange = (e) => {
		setCustomAmount(e.target.value);
		setFormData({ ...formData, amount: e.target.value });
	};

	const handleDonateClick = (e) => {
		e.preventDefault();
		setShowOptions(!showOptions); // Toggle the showOptions state
	};

	const handleMpesaPayment = () => {
		alert("Mpesa payment logic goes here");
	};

	const handleBankPayment = () => {
		alert(
			"Bank transfer details:\nBank: XYZ Bank\nAccount Number: 123456789\nBranch: Main Branch"
		);
	};

	return (
		<>
			<div className='hero contact'>
				<div>
					<h1>Contact Us</h1>
				</div>
				<div className='hero-text'>
					<Link to='/'>
						<h5 className='backhome'>Home</h5>
					</Link>
					<img src={rightarrow} alt='right arrow' />
					<h5>Contact</h5>
				</div>
			</div>

			<div className='donate-container'>
				<form className='donate-form' onSubmit={handleDonateClick}>
					<div>
						<label>Name:</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<label>Email:</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<label>Amount:</label>
						<div className='donate-buttons'>
							<button type='button' onClick={() => handleAmountChange(5)}>
								$5
							</button>
							<button type='button' onClick={() => handleAmountChange(10)}>
								$10
							</button>
							<button type='button' onClick={() => handleAmountChange(20)}>
								$20
							</button>
							<button type='button' onClick={() => setShowCustomInput(true)}>
								More
							</button>
							{showCustomInput && (
								<input
									type='number'
									min='1'
									value={customAmount}
									onChange={handleCustomAmountChange}
									placeholder='Enter amount'
									required
								/>
							)}
						</div>
					</div>
					<button className='btn' type='submit'>
						Donate
					</button>
				</form>

				{showOptions && (
					<div className='donate-options'>
						<div className='paypal-buttons-container'>
							<h2>PayPal</h2>
							<PayPalScriptProvider
								options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}
							>
								<PayPalButtons
									createOrder={(data, actions) => {
										return actions.order.create({
											purchase_units: [
												{
													amount: {
														value: formData.amount.toString(),
													},
												},
											],
										});
									}}
									onApprove={(data, actions) => {
										return actions.order.capture().then((details) => {
											alert(
												`Transaction completed by ${details.payer.name.given_name}`
											);
										});
									}}
								/>
							</PayPalScriptProvider>
						</div>

						<div>
							<h2>Mpesa</h2>
							<button className='btn' onClick={handleMpesaPayment}>
								Donate with Mpesa
							</button>
						</div>

						<div>
							<h2>Bank Transfer</h2>
							<button className='btn' onClick={handleBankPayment}>
								View Bank Details
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default DonatePage;
