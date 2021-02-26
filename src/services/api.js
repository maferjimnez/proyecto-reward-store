const myHeaders = new Headers();
myHeaders.append(
	'Authorization',
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRhOTk5MjI2ZjdkMjAwMjA0MTE0Y2UiLCJpYXQiOjE2MDgxNjE2ODN9.whOAW-6bzO5aZsKdniLQxLlrIx4ObDlrT-ux0WmWrk0'
);
myHeaders.append('Content-Type', 'application/json');
myHeaders.append("Cookie", "__cfduid=dc5dbb433c5a97c760c25ef0361082f391610387087");

const API_URL = "https://coding-challenge-api.aerolab.co";

export const fetchUser = async (setUserData) => {
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const userResult = await fetch(`${API_URL}/user/me`, requestOptions);
        const newUser = await userResult.json();
        setUserData(newUser);
    } catch (error) {
        console.log('error', error);
    };
};

export const fetchProduct = async (setProduct) => {
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const productResult = await fetch(`${API_URL}/products`, requestOptions)
        const newProduct = await productResult.json();
        setProduct(newProduct);
    } catch (error) {
        console.log('error', error);
    };
};

export const fetchGetPoints = async (amount, userData, setUserData) => {
	let raw = JSON.stringify({ amount: amount });

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	try {
		const result = await fetch(`${API_URL}/user/points`, requestOptions);
		const newPointsData = await result.json();
		const newPointsState = { ...userData };
		newPointsState.points = newPointsData['New Points'];
		setUserData(newPointsState);
	} catch (error) {
		console.log('error', error);
	}
};

export const fetchRedeemProduct = async (productId) => {
	let raw = JSON.stringify({ productId: productId });

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	try {
		await fetch(`${API_URL}/redeem`, requestOptions);
	} catch (error) {
		console.log('error', error);
	}
};

export const fetchUserPurchases = async (setRedeemedProducts) => {
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const historyResult = await fetch(`${API_URL}/user/history`, requestOptions);
		const productsRedeem = await historyResult.json();
		setRedeemedProducts(productsRedeem);
	} catch (error) {
        console.log('error', error);
    };
};
