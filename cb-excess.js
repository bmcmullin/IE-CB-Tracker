var tracker_period = 200; // ms
// var tracker_now = new Date(2025, 11, 31, 23, 59, 59); // Check end of CB1 period
var tracker_now = new Date();
//console.log(tracker_now);

function clock_tracker_update() {
    tracker_now = new Date();
    //console.log(tracker_now)
    document.getElementById("tracker_now").innerHTML = tracker_now;//.toLocaleString();
}

var ICP_d_2021 ;
var ICP_a1_2021 ;
var ICP_start_date = new Date(2021, 0, 1, 0, 0, 0) ;

function ICP_setup(data) {
    ICP_d_2021 = Number(data[0].d_2021);
    document.getElementById("ICP_d_2021").innerHTML = ICP_d_2021.toLocaleString(
	undefined, {minimumFractionDigits : 9, notation : "engineering"});
    ICP_a1_2021 = Number(data[0].a1_2021);
    document.getElementById("ICP_a1_2021").innerHTML = ICP_a1_2021.toLocaleString(
	undefined, {minimumFractionDigits : 9, notation : "standard"});
}


var ICP_S_n;

function ICP_tracker_update() {
    ICP_n = ((tracker_now.getTime()-ICP_start_date.getTime())/1000.0)+1;
    document.getElementById("ICP_n").innerHTML = ICP_n.toLocaleString(
	undefined, {minimumFractionDigits : 3, notation : "standard"});
    ICP_a_n = ICP_a1_2021 + ((ICP_n-1) * ICP_d_2021);
    document.getElementById("ICP_a_n").innerHTML = ICP_a_n.toLocaleString(
	undefined, {minimumFractionDigits : 9, notation : "standard"});
    ICP_S_n = ICP_n * (ICP_a1_2021 + ICP_a_n) / 2.0
    document.getElementById("ICP_S_n").innerHTML = ICP_S_n.toLocaleString(
	undefined, {maximumFractionDigits : 3, notation : "standard"});
}

var EAP_S0 = {}
var EAP_d = {}
var EAP_a1 = {}

function EAP_setup(data) {
    for (var year = 2021; year <= 2025; year++) {
	EAP_S0[year] = Number(data[0][year]);
	document.getElementById("EAP_S0_"+ year.toString()).innerHTML = EAP_S0[year].toLocaleString(
     	    undefined, {maximumFractionDigits : 0, notation : "standard"});
	EAP_d[year] = Number(data[1][year]);
	document.getElementById("EAP_d_"+ year.toString()).innerHTML = EAP_d[year].toLocaleString(
     	    undefined, {minimumFractionDigits : 9, notation : "engineering"});
	EAP_a1[year] = Number(data[2][year]);
	document.getElementById("EAP_a1_"+ year.toString()).innerHTML = EAP_a1[year].toLocaleString(
     	    undefined, {minimumFractionDigits : 9, notation : "standard"});
    }
}

var EAP_S_n;

function EAP_tracker_update() {
    year_now = tracker_now.getFullYear();
    //console.log(year_now);
    document.getElementById("year_now").innerHTML = year_now.toLocaleString(
     	undefined, {maximumFractionDigits : 0, useGrouping: false, notation : "standard"});
    EAP_start_date = new Date(year_now, 0, 1, 0, 0, 0);
    document.getElementById("EAP_S_0").innerHTML = EAP_S0[year_now].toLocaleString(
     	undefined, {maximumFractionDigits : 0, notation : "standard"});
    document.getElementById("EAP_d").innerHTML = EAP_d[year_now].toLocaleString(
	undefined, {minimumFractionDigits : 9, notation : "engineering"});
    document.getElementById("EAP_a1").innerHTML = EAP_a1[year_now].toLocaleString(
	undefined, {minimumFractionDigits : 9, notation : "standard"});
    EAP_n = ((tracker_now.getTime()-EAP_start_date.getTime())/1000.0)+1;
    document.getElementById("EAP_n").innerHTML = EAP_n.toLocaleString(
	undefined, {minimumFractionDigits : 3, notation : "standard"});
    EAP_a_n = EAP_a1[year_now] + ((EAP_n-1) * EAP_d[year_now]);
    document.getElementById("EAP_a_n").innerHTML = EAP_a_n.toLocaleString(
	undefined, {minimumFractionDigits : 9, notation : "standard"});
    EAP_S_n = EAP_S0[year_now] + (EAP_n * (EAP_a1[year_now] + EAP_a_n) / 2.0);
    document.getElementById("EAP_S_n").innerHTML = EAP_S_n.toLocaleString(
	undefined, {maximumFractionDigits : 3, notation : "standard"});
}


var excess = 0.0;

function excess_tracker_txt_update() {
    excess = EAP_S_n-ICP_S_n;
    document.getElementById("excess-tracker-txt").innerHTML = excess.toLocaleString(
	undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3})
}

var gauge_data = [
    {
	domain: { x: [0, 1], y: [0, 1] },
	value: 0,
	title: { text: "Carbon Budget Excess" },
	type: "indicator",
	mode: "gauge+number"
    }
];

var gauge_layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    
function excess_tracker_gauge_setup() {
    Plotly.newPlot('gap-tracker-gauge', gauge_data, gauge_layout);
}

function excess_tracker_gauge_update(){
 gauge_data[0].value=gauge_data[0].value+1;
 Plotly.redraw('gap-tracker-gauge')
}

function excess_tracker_update(){
    clock_tracker_update();
    ICP_tracker_update();
    EAP_tracker_update();
    excess_tracker_txt_update();
    excess_tracker_gauge_update(); // FIXME: maybe run at lower frequency?
}

function excess_tracker_setup(){
    d3.csv("ICP-prms-CSV.csv", function(data){ICP_setup(data);});
    d3.csv("EAP-prms-CSV.csv", function(data){EAP_setup(data);});
    // FIXME: race condition risk!! Need to wait for both CSV loads to complete...

    excess_tracker_gauge_setup();

    setInterval(excess_tracker_update, tracker_period);
    //setTimeout(tracker_update, tracker_period); // one-shot!
    
}

document.addEventListener("DOMContentLoaded", excess_tracker_setup);


