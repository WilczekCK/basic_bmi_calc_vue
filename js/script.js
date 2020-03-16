var vueApp = new Vue({
    el: '.vue-app',
    data: function () {
        return {
            resultText: 'Waiting for your input',
            resultHeading: 'Check your BMI',
            bmiGradeColor: 'is-info',
            bmiGrade: 0,
            weight: 60,
            height: 170,
            gender: '',
        }
    },
    methods: {
        setResultText: function(results){
            this.resultHeading = results.heading;
            this.resultText = results.content;
        },
        setBackground: function(results){
            this.bmiGradeColor = results.color;
        },
        calcBMI: function(){
            var calculation = this.weight / Math.pow(this.height, 2);
            this.bmiGrade = Math.round(calculation * 10000)
        }
    },
    watch: {
        weight: function(){
            if(this.gender) this.calcBMI()
            else this.resultText = 'Please select a gender!'
        },
        height: function(){
            if(this.gender) this.calcBMI()
            else this.resultText = 'Please select a gender!'
        },
        bmiGrade: function(incomingGrade){
            var results = {
                heading: '',
                content: '',
                color: ''
            }

            if(incomingGrade < 16){
                results.heading = 'Starvantion'
                results.content = 'Your body starts to shut down!'
                results.color = 'is-dark';
            }else if(incomingGrade < 17){
                results.heading = 'Emaciation'
                results.content = 'You are really skinny!' 
                results.color = 'is-danger';
            }else if(incomingGrade < 19){
                results.heading = 'Underweight'
                results.content = 'You are lightly skinny!' 
                results.color = 'is-primary';
            }else if(incomingGrade < 25){
                results.heading = 'Proper'
                results.content = 'Keep it up! Your weight is correct!' 
                results.color = 'is-success';
            }else if(incomingGrade < 30){
                results.heading = 'Overweight'
                results.content = 'You are lightly obese!' 
                results.color = 'is-warning';
            }else if(incomingGrade < 35){
                results.heading = '1 Degree of obesity'
                results.content = 'You are really obese!' 
                results.color = 'is-danger';
            }else if(incomingGrade < 40){
                results.heading = '2 Degree of obesity'
                results.content = 'You are strongly obese!' 
                results.color = 'is.danger';
            }else{
                results.heading = 'Extreme Obesity'
                results.content = 'You are extremly obese!'
                results.color = 'is.dark';
            }


            this.setResultText(results)
            this.setBackground(results)
        }
    }
})
