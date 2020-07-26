var cars = document.getElementById('carNum');
var buses = document.getElementById('busNum');
var wagons = document.getElementById('wagonNum');
var carAdd = document.getElementById('carInc');
var busAdd = document.getElementById('busInc');
var wagonAdd = document.getElementById('wagonInc');
var carSub = document.getElementById('carDec');
var busSub = document.getElementById('busDec');
var wagonSub = document.getElementById('wagonDec');
var count = document.getElementById('vehicleTotal');
var cashTotal = document.getElementById('cashTotal');
var carFee = document.getElementById('carCash');
var busFee = document.getElementById('busCash');
var wagonFee = document.getElementById('wagonCash');
var reset = document.getElementById('reset');
var currentVehicleTotal = document.getElementById('currentVehicleTotal');
var totalCars = document.getElementById('totalCars');
var totalBuses = document.getElementById('totalBuses');
var totalWagons = document.getElementById('totalWagons');

var carNum = 0;
var busNum = 0;
var wagonNum = 0;
var carCost = 0;
var busCost = 0;
var wagonCost = 0;
var carTotal = 0;
var busTotal = 0;
var wagonTotal = 0;
var cash = 0;
var currentVehicle = 0;
var i = 0;

const alertFull = () => {
	alert('Parking Full');
};

const alertInvalid = () => {
	alert('Invalid input. You may not go any lower');
};

const carIncrease = () => {
	if (i <= 9) {
		carNum += 1;
		cars.textContent = carNum;
		i++;
		cash += 100;
		carCost += 100;
		currentVehicle += 1;
		carTotal += 1;
		totalCars.textContent = carTotal;
		currentVehicleTotal.textContent = currentVehicle;
		cashTotal.textContent = `Rs. ${cash}`;
		carFee.textContent = `Rs. ${carCost}`;
		count.textContent = i;
	} else if (i >= 10) {
		alertFull();
	}
};

const carDecrease = () => {
	if (i > 0) {
		carNum -= 1;
		cars.textContent = carNum;
		i -= 1;
		count.textContent = i;
	} else {
		alertInvalid();
	}
};

const busIncrease = () => {
	if (i <= 9) {
		busNum += 1;
		buses.textContent = busNum;
		i++;
		cash += 300;
		busCost += 300;
		currentVehicle += 1;
		busTotal += 1;
		totalBuses.textContent = busTotal;
		currentVehicleTotal.textContent = currentVehicle;
		cashTotal.textContent = `Rs. ${cash}`;
		busFee.textContent = `Rs. ${busCost}`;
		count.textContent = i;
	} else if (i >= 10) {
		alertFull();
	}
};

const busDecrease = () => {
	if (i > 0) {
		busNum -= 1;
		buses.textContent = busNum;
		i -= 1;
		count.textContent = i;
	} else {
		alertInvalid();
	}
};

const wagonIncrease = () => {
	if (i <= 9) {
		wagonNum += 1;
		wagons.textContent = wagonNum;
		i++;
		cash += 400;
		wagonCost += 400;
		currentVehicle += 1;
		wagonTotal += 1;
		totalWagons.textContent = wagonTotal;
		currentVehicleTotal.textContent = currentVehicle;
		cashTotal.textContent = `Rs. ${cash}`;
		wagonFee.textContent = `Rs. ${wagonCost}`;
		count.textContent = i;
	} else {
		alertFull();
	}
};

const wagonDecrease = () => {
	if (i > 0) {
		wagonNum -= 1;
		wagons.textContent = wagonNum;
		i -= 1;
		count.textContent = i;
	} else {
		alertInvalid();
	}
};

const resetData = () => {
	i = 0;
	currentVehicle = 0;
	currentVehicleTotal.textContent = currentVehicle;
	wagonNum = 0;
	wagons.textContent = wagonNum;
	carNum = 0;
	cars.textContent = carNum;
	busNum = 0;
	buses.textContent = busNum;
	cash = 0;
	// cashTotal.textContent = cash;
	carCost.textContent = cash;
	busCost.textContent = cash;
	wagonCost.textContent = cash;
};

carAdd.addEventListener('click', () => {
	carIncrease();
});

carSub.addEventListener('click', () => {
	carDecrease();
});

busAdd.addEventListener('click', () => {
	busIncrease();
});

busSub.addEventListener('click', () => {
	busDecrease();
});

wagonAdd.addEventListener('click', () => {
	wagonIncrease();
});

wagonSub.addEventListener('click', () => {
	wagonDecrease();
});

reset.addEventListener('click', () => {
	resetData();
});
