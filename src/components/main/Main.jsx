import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<p>Vistaar</p>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , truth-seekers! </span>
							</p>
							<p>How Can we Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Did the COVID-19 pandemic originate from America? Verify the accuracy of this news")
								}
							>
								<p>Did the COVID-19 pandemic originate from America? Verify the accuracy of this news  </p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Was Gandhi ji first pm of india? Validate the accuracy of this news."
									)
								}
							>
								<p>Was Gandhi ji first pm of india? Did Nasa really share satellite image of India on their website on diwali?Validate the accuracy of this news</p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("Is english really the national language of india?Validate the accuracy of this news.")
								}
							>
								<p>Is english really the national language of india?Validate the accuracy of this news</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Has pakistan really won 1965 war?Validate the accuracy of this news."
									);
								}}
							>
								<p>Has pakistan really won 1965 war?Validate the accuracy of this news. </p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the news Here"
						/>
						<div>
							{/* <img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" /> */}
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
						Vistaar may display inaccurate info, including about people, so
							double-check its responses. 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
