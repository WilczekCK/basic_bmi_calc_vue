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
        setResultText: function(results){
            this.resultText = results.heading;
        },
        calcBMI: function(){
            var calculation = this.weight / Math.pow(this.height, 2);
            this.bmiGrade = Math.round(calculation * 10000)
        }
    },
    watch: {
        bmiGrade: function(incomingGrade){
            var results = {
                heading: '',
                content: '',
                color: ''
            }

            if(incomingGrade < 16){
                results.heading = 'Starvantion'
                results.content = 'You are really skinny!'
            }else if(incomingGrade < 17){
                results.heading = 'Emaciation'
                results.content = 'You are really skinny!' 
            }else if(incomingGrade < 19){
                results.heading = 'Underweight'
                results.content = 'You are really skinny!' 
            }else if(incomingGrade < 25){
                results.heading = 'Proper'
                results.content = 'You are really skinny!' 
            }else if(incomingGrade < 30){
                results.heading = 'Overweight'
                results.content = 'You are really skinny!' 
            }else if(incomingGrade < 35){
                results.heading = '1 Degree of obesity'
                results.content = 'You are really skinny!' 
            }else if(incomingGrade < 40){
                results.heading = '2 Degree of obesity'
                results.content = 'You are really skinny!' 
            }else{
                results.heading = 'Extreme Obesity'
                results.content = 'You are really skinny!'
            }


            this.setResultText(results)
        }
    }
})
