const myHeaders = new Headers();
myHeaders.append(
	'Authorization',
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRhOTk5MjI2ZjdkMjAwMjA0MTE0Y2UiLCJpYXQiOjE2MDgxNjE2ODN9.whOAW-6bzO5aZsKdniLQxLlrIx4ObDlrT-ux0WmWrk0'
);
myHeaders.append('Content-Type', 'application/json');
myHeaders.append("Cookie", "__cfduid=dc5dbb433c5a97c760c25ef0361082f391610387087");

export const fetchUser = async (userData, setUserData) => {
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const userResult = await fetch("https://coding-challenge-api.aerolab.co/user/me", requestOptions);
        const newUser = await userResult.json();
        setUserData(newUser);
    } catch (error) {
        console.log('error', error);
    };
};

export const fetchProduct = async (products, setProduct) => {
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const productResult = await fetch("https://coding-challenge-api.aerolab.co/products", requestOptions)
        const newProduct = await productResult.json();
        setProduct(newProduct);
    } catch (error) {
        console.log('error', error);
    };
};