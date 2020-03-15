var vueApp = new Vue({
    el: '.vue-app',
    data: function () {
        return {
            resultText: 'Waiting for your input',
            bmiGrade: 0,
            weight: 60,
            height: 170,
            gender: '',
        }
    },
    methods: {
        triggeredControls: function () {
            if(this.gender) this.calcBMI();
            else this.resultText = 'Please select a gender!'
        },
        setText: function(results){
            console.log(results)
        },
        calcBMI: function(){
            var calculation = this.weight / Math.pow(this.height, 2);
            this.bmiGrade = Math.round(calculation * 10000)
            
            // == STATUSES ==
                // 1 - Starvation
                // 2 - Emaciation
                // 3 - Underweight
                // 4 - Proper
                // 5 - Overweight
                // 6 - 1 Degree of obesity
        }
    },
    watch: {
        bmiGrade: function(oldGrade){
            this.setText(oldGrade)
        }
    }
})
