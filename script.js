var hesapmakinasi = {
    sonuc: 0,
    islemler: "",
    
    calculate: function() {
        try {
            this.sonuc = eval(this.islemler);
            if (!(Number.isInteger(this.sonuc)))
                this.sonuc = this.sonuc.toFixed(10);
            if (this.sonuc == null || this.sonuc == undefined)
                this.sonuc = '0';
        } catch (error) {
            console.log(error);
            this.sonuc = "NaN";
            this.clear();
        }

    },
    
    clear: function() {
        this.islemler = "";
    },
    
    addOperator: function(operator) {

        this.islemler = "".concat(this.islemler, operator.trim());
        this.islemler.trim();
    },
};
function updateUI() {

    display.value = hesapmakinasi.islemler;
    
}
function displayResult() {
    display.value = hesapmakinasi.sonuc;
}
var display = document.getElementById("screen");
var allButtons = document.getElementsByTagName("button");

[...allButtons].forEach(element => {

    element.addEventListener('click', function() {
        if (element.id == "clear") {
            hesapmakinasi.clear();
            updateUI();
        } else if (element.id == "equals") {
            hesapmakinasi.calculate();
            hesapmakinasi.clear();
            updateUI();
            displayResult();
        } else {
            hesapmakinasi.addOperator(element.value);
            updateUI();
        }
    });
});