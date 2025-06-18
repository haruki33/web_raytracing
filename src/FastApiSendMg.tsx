
function FastApiSendMg () {
	const url = "http://127.0.0.1:8000";

	const handleClick = async() => {
		const res = await fetch(url+"/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: "Hello, FastAPI!" }),
		});

		const data = await res.json();
		console.log(data);
	};


	return (
		<div>
			<div>messageを送ります</div>
			<button onClick={handleClick}>データを取得</button>
		</div>
	);
}

export default FastApiSendMg;
