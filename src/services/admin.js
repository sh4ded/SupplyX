import axios from 'axios';
const baseUrl = 'http://localhost:8000/admin'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const register = obj => {
	const request = axios.post(`${baseUrl}/register`,obj)
	return request.then(response => {
		return response.data
	})
}

const login = obj => {
	const request = axios.post(`${baseUrl}/login`,obj)
	return request.then(response => {
		return response.data
	})
}

const getOrderHistory = obj => {
	const request = axios.post(`${baseUrl}/ordershistory`,obj)
	console.log(obj)
	return request.then(response => {
		return response.data
	})
}

const getPendingOrders = obj => {
	const request = axios.post(`${baseUrl}/orderspending`,obj)
	console.log(obj)
	return request.then(response => {
		return response.data
	})
}

const getId = (id, obj) => {
	const request = axios.post(`${baseUrl}/orders/${id}`,obj)
	return request.then(response => {
		return response.data
	})
}

const addUser = (obj) => {
	const request = axios.post(`${baseUrl}/register`, obj)
	return request.then(response => {
		return response.data
	})
}

const placeOrder = (obj) => {
	const request = axios.post(`${baseUrl}/addOrder`, obj)
	return request.then(response => {
		return response.data
	})
}

const getPrice = (obj) => {
	const request = axios.post(`${baseUrl}/price`, obj)
	return request.then(response => {
		return response.data
	})
}

const getWarehouse = (id, obj) => {
	const request = axios.post(`${baseUrl}/warehouse/${id}`, obj)
	return request.then(response => {
		return response.data
	})
}

const approveOrder = (obj) => {
	const request = axios.post(`${baseUrl}/approve`, obj)
	return request.then(response => {
		return response.data
	})
}

const updateStatus = (obj) => {
	const request = axios.put(`${baseUrl}/orders/status`, obj)
	return request.then(response => {
		return response.data	
	})
}

const getVehicles = (obj) => {
	const request = axios.post(`${baseUrl}/vehicles`, obj)
	return request.then(response => {
		return response.data	
	})
}

const putVehicle = (obj) => {
	const request = axios.post(`${baseUrl}/putvehicle`, obj)
	return request.then(response => {
		return response.data	
	})
}

const rejectOrder = (obj) => {
	const request = axios.post(`${baseUrl}/rejectorder`, obj)
	return request.then(response => {
		return response.data
	})
}

export default {register, login, getOrderHistory, getPendingOrders, getId, addUser, placeOrder, getPrice, getWarehouse, approveOrder, updateStatus, getVehicles, putVehicle, rejectOrder};